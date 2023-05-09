from django.db import models
from django.conf import settings
from utils.generic.crypt import generate_random_number_code
from datetime import datetime, timedelta
from django.core.validators import MinLengthValidator

class User(models.Model):
    username = models.CharField(max_length=400, unique=True, null=False, blank=False, validators=[MinLengthValidator(3)])
    password = models.CharField(max_length=255, null=False, blank=False, validators=[MinLengthValidator(4)])
    email = models.EmailField(null=False, blank=False, unique=True)
    full_name = models.CharField(max_length=500, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    is_active = models.BooleanField(default=False, )

class ConfirmationCode(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=4, default=generate_random_number_code(4), unique=True)
    expiration = models.DateTimeField(default=datetime.now() + timedelta(minutes=30))