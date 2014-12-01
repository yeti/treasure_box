from django.conf import settings
from django.core.files import File
import os
from rest_framework import viewsets
from rest_framework.exceptions import ParseError
import uuid
import envoy
from bookmarks.api.permissions import IsBookmarkOwner
from bookmarks.api.serializers import CategorySerializer, BookmarkSerializer
from bookmarks.models import Category, Bookmark
from rest_core.rest_core.permissions import IsOwner


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsOwner,)

    def get_queryset(self):
        queryset = super(CategoryViewSet, self).get_queryset()
        return queryset.filter(user=self.request.user)

    def pre_save(self, obj):
        obj.user = self.request.user
        super(CategoryViewSet, self).pre_save(obj)


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = (IsBookmarkOwner,)
    search_fields = ('title', 'description')

    def get_queryset(self):
        queryset = super(BookmarkViewSet, self).get_queryset()
        return queryset.filter(category__user=self.request.user)

    def pre_save(self, obj):
        if "category_name" in self.request.DATA and self.request.DATA["category_name"]:
            category, created = Category.objects.get_or_create(user=self.request.user,
                                                               name=self.request.DATA["category_name"])
            if not category:
                raise ParseError("Invalid category")
            obj.category = category
        else:
            raise ParseError("Missing category")

        super(BookmarkViewSet, self).pre_save(obj)

    def post_save(self, obj, created=False):
        super(BookmarkViewSet, self).post_save(obj)

        if "url" in self.request.DATA and self.request.DATA["url"]:
            static_root = os.path.join(settings.PROJECT_ROOT, "bookmarks/", settings.STATIC_URL.strip("/"))
            outfile = os.path.join("/tmp", '%s.jpg' % uuid.uuid4())
            command = "phantomjs {0}/js/rasterize.js {1} {2}".format(static_root, self.request.DATA["url"], outfile)

            r = envoy.run(command)
            if r.status_code != 0:
                raise ParseError("Screenshot failed")

            if os.path.exists(outfile):
                obj.screenshot.save("{}.jpg".format(obj.pk), File(open(outfile, 'rb')))
                obj.save()
            else:
                raise ParseError("Screenshot failed")