from django.urls import path
from rest_framework import routers
from .views import  login, sign_up,confirm_code

# router = routers.DefaultRouter()
# router.register("users/", UsersViewset, "users")

# urlpatterns = router.urls

urlpatterns = [
    path("users/login", login,),
    path("users/sign-up", sign_up,),
    path("users/confirm-user", confirm_code,),
    # path("users/me", get_users)
]