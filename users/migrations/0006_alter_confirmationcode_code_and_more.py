# Generated by Django 4.0 on 2023-03-18 21:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_confirmationcode_code_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='confirmationcode',
            name='code',
            field=models.CharField(default='9495', max_length=4, unique=True),
        ),
        migrations.AlterField(
            model_name='confirmationcode',
            name='expiriation',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 18, 15, 57, 49, 166076)),
        ),
    ]
