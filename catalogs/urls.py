from django.urls import path
from rest_framework import routers
from .views import  get_user_catalogs, create_catalog

# router = routers.DefaultRouter()
# router.register("users/", UsersViewset, "users")

# urlpatterns = router.urls

urlpatterns = [
    path("catalogs/<int:user_id>", get_user_catalogs),
    path("catalogs", create_catalog)
    # path("users/me", get_users)
]