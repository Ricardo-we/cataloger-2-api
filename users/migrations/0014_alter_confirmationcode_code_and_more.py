# Generated by Django 4.2.1 on 2023-05-19 15:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_alter_confirmationcode_code_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='confirmationcode',
            name='code',
            field=models.CharField(default='3961', max_length=4, unique=True),
        ),
        migrations.AlterField(
            model_name='confirmationcode',
            name='expiration',
            field=models.DateTimeField(default=datetime.datetime(2023, 5, 19, 10, 4, 22, 714024)),
        ),
    ]