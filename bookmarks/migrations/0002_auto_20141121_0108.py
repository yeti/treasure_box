# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='url',
            field=models.URLField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='category',
            field=models.ForeignKey(related_name='bookmarks', to='bookmarks.Category'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='category',
            name='user',
            field=models.ForeignKey(related_name='categories', to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
    ]
