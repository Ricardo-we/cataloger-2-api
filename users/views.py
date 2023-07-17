from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.request import Request
from .serializers import UserSerializer, LoginUserSerializer, CreateUserSerializer
from .services.UsersService import UsersService
from utils.generic.error_response import error_response
from utils.classes.TranslationsBuilder import get_translation_dict_by_headers
from utils.exceptions.BaseHttpException import BaseHttpException
from shared.services.EmailService import EmailService

users_service = UsersService()
email_service = EmailService()


@csrf_exempt
@api_view(["POST"])
def login(request: Request):
    try:
        language = get_translation_dict_by_headers(request)
        login_serializer = LoginUserSerializer(data=request.data)
        if not login_serializer.is_valid():
            return error_response(language.get("validation").get("InvalidUser").build())
    
        user = users_service.login_user(login_serializer.validated_data)

        return Response(UserSerializer(user).data, 200)
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)


@csrf_exempt
@api_view(["POST"])
def sign_up(request: Request):
    language = get_translation_dict_by_headers(request)

    try:
        sign_up_serializer = CreateUserSerializer(data=request.data)

        if not sign_up_serializer.is_valid():
            return error_response(language.get("validation").get("InvalidUser").build())

        code, user = users_service.create_user(sign_up_serializer.validated_data)
        email_service.send(
            body=language.get("generic").get("email-message").build()(code.code), 
            receivers=[user.email]
        )

        return Response(UserSerializer(user).data, 201)
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)
    except Exception as err:
        return error_response(err.__str__(),500)

@csrf_exempt
@api_view(["POST"])
def confirm_code(request: Request):
    try:
        code = request.data.get("code")
        # if not request.data.get("code"):
        #     return error_response("")
        authenticated_user = users_service.confirm_user(code)

        return Response(UserSerializer(authenticated_user).data, 200)
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)

@csrf_exempt
@api_view(["GET"])
def request_new_code(request: Request, user_id):
    try:
        language = get_translation_dict_by_headers(request)
        new_code, user = users_service.request_new_code(user_id)
        
        email_service.send(
            body=language.get("generic").get("email-message").build()(new_code.code), 
            receivers=[user.email]
        )
        return Response("", 204)
    except BaseHttpException as exception:
        return error_response(exception.get_message(request), exception.status)

# @csrf_exempt
# @api_view(["GET"])
# def get_users(request):
#     try:
#         user = use_user(request)
#         print(user)
#         all_users = User.objects.all()
#         return Response(UserSerializer(all_users, many=True).data)
#     except BaseHttpException as exception:
#         return error_response(exception.get_message(request), exception.status)
