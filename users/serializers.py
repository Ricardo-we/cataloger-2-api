from rest_framework import serializers
from .models import User
from utils.generic.jwt import jwt_encode
from django.forms.models import model_to_dict

PASSWORD_REGEX = "^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9]).+$"

class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField("get_jwt_token")

    def get_jwt_token(self,user):
        return jwt_encode(model_to_dict(user))

    class Meta: 
        model = User
        fields = ["id", "username", "email", "token", "full_name", "created_at"]
    
class LoginUserSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.RegexField(PASSWORD_REGEX, )

class CreateUserSerializer(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=400,)
    full_name = serializers.CharField(required=True,max_length=500,)
    email = serializers.EmailField(required=True)
    password = serializers.RegexField(PASSWORD_REGEX, )
