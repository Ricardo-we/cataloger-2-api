import jwt
from django.conf import settings

def jwt_encode(payload: dict):
    return jwt.encode(payload, settings.JWT_SECRET, settings.JWT_ALGORITHM)

def jwt_decode(token: str):
    return jwt.decode(token,settings.JWT_SECRET, settings.JWT_ALGORITHM)