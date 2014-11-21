from rest_framework import viewsets
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