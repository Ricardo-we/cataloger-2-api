# Generated by Django 4.2.1 on 2023-05-06 16:54

import datetime
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_alter_confirmationcode_code_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='confirmationcode',
            name='code',
            field=models.CharField(default='3468', max_length=4, unique=True),
        ),
        migrations.AlterField(
            model_name='confirmationcode',
            name='expiration',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 6, 11, 24, 43, 177818)),
        ),
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=255, validators=[django.core.validators.MinLengthValidator(4)]),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=400, unique=True, validators=[django.core.validators.MinLengthValidator(3)]),
        ),
    ]