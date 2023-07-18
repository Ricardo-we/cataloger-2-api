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
from catalogs.services.CatalogsService import CatalogService
from users.serializers import UserSerializer
# Create your views here.

catalog_service = CatalogService()


@csrf_exempt
@api_view(["GET"])
def get_user_catalogs(request: Request, user_id: int):
    try:
        # user = use_db_user(request)
        user, catalogs = catalog_service.find_catalogs_by_user_id(user_id)
        return Response(
            {
                "user": UserSerializer(user).data,
                "catalogs": CatalogSerializer(catalogs, many=True).data,
            },
            200,
        )
        # return Response("Hello world")
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)


@csrf_exempt
@api_view(["POST"])
def create_catalog(request: Request):
    try:
        user = use_db_user(request)
        new_catalog = catalog_service.create_catalog(request.data, user)
        # catalogs = catalog_service.find_catalogs_by_user_id(user_id)
        return Response(CatalogSerializer(new_catalog).data, 201)
        # return Response("Hello world")
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)
