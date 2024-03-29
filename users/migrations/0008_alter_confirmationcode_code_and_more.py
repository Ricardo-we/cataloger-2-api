# Generated by Django 4.0 on 2023-03-18 23:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_remove_confirmationcode_expiriation_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='confirmationcode',
            name='code',
            field=models.CharField(default='5030', max_length=4, unique=True),
        ),
        migrations.AlterField(
            model_name='confirmationcode',
            name='expiration',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 18, 17, 52, 21, 939124)),
        ),
    ]
