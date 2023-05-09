from utils.generic.jwt import jwt_decode, jwt_encode
from utils.placeholder_classes.UserPlaceholder import UserPlaceholder
from utils.exceptions.AuthExceptions import InvalidTokenException, TokenNotExists

def use_bearer_auth(request, raise_auth_exception: bool=True):
    try:
        token = str(request.headers.get("Authorization")).split(" ")
        token = token[1]
        return token
    except: 
        if raise_auth_exception:
            raise TokenNotExists()
        return ""

def use_user(request, raise_exception: bool=True):
    try:
        user = jwt_decode(use_bearer_auth(request))
        user = UserPlaceholder(user)
        return user
    except: 
        if raise_exception:
            raise InvalidTokenException()
        return UserPlaceholder({})