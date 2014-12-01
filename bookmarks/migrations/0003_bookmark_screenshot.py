# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarks', '0002_auto_20141121_0108'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='screenshot',
            field=models.ImageField(null=True, upload_to=b'screenshots', blank=True),
            preserve_default=True,
        ),
    ]
