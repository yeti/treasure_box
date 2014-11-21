from django.contrib import admin

from bookmarks.models import User, Category, Bookmark

admin.site.register(User)
admin.site.register(Category)
admin.site.register(Bookmark)