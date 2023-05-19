from django.contrib import admin
from .models import User, ConfirmationCode, Profile
# Register your models here.
admin.site.register(User)
admin.site.register(ConfirmationCode)
admin.site.register(Profile)