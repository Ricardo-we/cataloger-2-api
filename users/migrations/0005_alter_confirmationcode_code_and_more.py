# Generated by Django 4.0 on 2023-03-18 21:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_is_active_alter_user_password_confirmationcode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='confirmationcode',
            name='code',
            field=models.CharField(default='0156', max_length=4, unique=True),
        ),
        migrations.AlterField(
            model_name='confirmationcode',
            name='expiriation',
            field=models.DateTimeField(default=datetime.datetime(2023, 3, 18, 15, 31, 46, 430667)),
        ),
    ]
