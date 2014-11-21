from rest_framework import viewsets
from rest_framework.exceptions import ParseError
from bookmarks.api.permissions import IsBookmarkOwner
from bookmarks.api.serializers import CategorySerializer, BookmarkSerializer
from bookmarks.models import Category, Bookmark
from rest_core.rest_core.permissions import IsOwner


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsOwner,)

    def pre_save(self, obj):
        obj.user = self.request.user
        super(CategoryViewSet, self).pre_save(obj)


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = (IsBookmarkOwner,)
    search_fields = ('title', 'description')

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