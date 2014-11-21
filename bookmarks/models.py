from django.db import models
from django.db.models.signals import post_save
from rest_user.rest_user.models import AbstractYeti
from manticore_django.manticore_django.models import resize_model_photos
from rest_user.rest_user.utils import create_auth_client


class User(AbstractYeti):
    personal_site = models.URLField(blank=True, null=True)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        super(User, self).save(force_insert, force_update, using, update_fields)
        resize_model_photos(self, force_update)

post_save.connect(create_auth_client, sender=User)


class Category(models.Model):
    user = models.ForeignKey(User, related_name="categories")
    name = models.CharField(max_length=30)

    def __unicode__(self):
        return u"{} for {}".format(self.name, self.user)


class Bookmark(models.Model):
    category = models.ForeignKey(Category, related_name="bookmarks")
    url = models.URLField()
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __unicode__(self):
        return u"{} for {}".format(self.title, self.category)