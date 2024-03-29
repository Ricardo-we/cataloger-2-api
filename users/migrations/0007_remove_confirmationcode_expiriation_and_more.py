# Generated by Django 4.0 on 2023-03-18 23:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_confirmationcode_code_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='confirmationcode',
            name='expiriation',
        ),
        migrations.AddField(
            model_name='confirmationcode',
            name='expiration',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 18, 17, 52, 7, 263952)),
        ),
        migrations.AlterField(
            model_name='confirmationcode',
            name='code',
            field=models.CharField(default='4750', max_length=4, unique=True),
        ),
    ]
