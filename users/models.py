from django.db import models
from django.conf import settings
from utils.generic.crypt import generate_random_number_code
from datetime import datetime, timedelta
from django.core.validators import MinLengthValidator


class Profile(models.Model): 
    profile_type = models.CharField(max_length=30, blank=False, null=False, unique=True)
    price = models.DecimalField(max_digits=100000,decimal_places=2)


class User(models.Model):
    username = models.CharField(max_length=400, unique=True, null=False, blank=False, validators=[MinLengthValidator(3)])
    password = models.CharField(max_length=255, null=False, blank=False, validators=[MinLengthValidator(4)])
    email = models.EmailField(null=False, blank=False, unique=True)
    full_name = models.CharField(max_length=500, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    is_active = models.BooleanField(default=False, )
    profile = models.ForeignKey(Profile,null=True, blank=True, on_delete=models.SET_NULL)

class ConfirmationCode(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=4, default=generate_random_number_code(4), unique=True)
    expiration = models.DateTimeField(default=datetime.now() + timedelta(minutes=30))