from django.db import models
from users.models import User

# Create your models here.

class Catalog(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    background = models.CharField(max_length=400, null=False, blank=False, default="#fff")

class Slides(models.Model):
    image = models.TextField()
    catalog = models.ForeignKey(Catalog, on_delete=models.CASCADE)