from rest_framework import serializers
from bookmarks.models import User, Category, Bookmark
from rest_user.rest_user.serializers import AuthSerializerMixin


class TreasureBoxUserSerializer(AuthSerializerMixin, serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'id', 'username', 'fullname', 'thumbnail', 'original_photo', 'small_photo', 'large_photo',
                  'about', 'personal_site')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)


class BookmarkSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Bookmark
        fields = ('url', 'title', 'description', 'category', 'screenshot')