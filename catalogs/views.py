from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.request import Request
from .serializers import CatalogSerializer
from users.services.UsersService import UsersService
from utils.generic.error_response import error_response
from utils.classes.TranslationsBuilder import get_translation_dict_by_headers
from utils.exceptions.BaseHttpException import BaseHttpException
from shared.services.EmailService import EmailService
from utils.auth.use_user import use_db_user
# Create your views here.

@csrf_exempt
@api_view(["GET"])
def get_all_catalogs(request: Request):
    try:
        user = use_db_user(request)
        
        return Response("Hello world")
        # return Response(UserSerializer(authenticated_user).data, 200)
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)