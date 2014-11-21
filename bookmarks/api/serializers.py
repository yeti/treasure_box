from bookmarks.models import User, Category, Bookmark
from rest_core.rest_core.serializers import BaseModelSerializer
from rest_user.rest_user.serializers import AuthSerializerMixin


class TreasureBoxUserSerializer(AuthSerializerMixin, BaseModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'id', 'username', 'fullname', 'thumbnail', 'original_photo', 'small_photo', 'large_photo',
                  'about', 'personal_site')


class CategorySerializer(BaseModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)


class BookmarkSerializer(BaseModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Bookmark
        fields = ('url', 'title', 'description')