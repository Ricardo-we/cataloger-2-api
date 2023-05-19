from django.urls import path
from rest_framework import routers
from .views import  get_all_catalogs

# router = routers.DefaultRouter()
# router.register("users/", UsersViewset, "users")

# urlpatterns = router.urls

urlpatterns = [
    path("catalogs", get_all_catalogs)
    # path("users/me", get_users)
]