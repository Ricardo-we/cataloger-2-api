from ..serializers import UserSerializer
from ..models import User, ConfirmationCode, Profile
from utils.generic.crypt import decrypt, encrypt
from utils.exceptions.InvalidUserException import InvalidUserException, UserNotExistsException
from utils.exceptions.DbIntegrityException import DbIntegrityException
from datetime import datetime
from django.db.models import Q
from utils.generic.crypt import generate_random_number_code
from django.conf import settings
from utils.exceptions.InvalidConfirmationCode import InvalidConfirmCodeException

class UserServiceBase:
    def create_user(user={}): pass
    def confirm_user(user={}): pass
    def login_user(user={}): pass
    def delete_expired_users(user={}): pass
    def confirm_user(user={}): pass


class UsersService(UserServiceBase):
    def create_confirmation_code(self, user):
        try:
            confirmation_code = ConfirmationCode.objects.create(user=user, code=generate_random_number_code(4))
            return confirmation_code
        except: 
            return self.create_confirmation_code(user)

    def user_exists(self, user={}):
        user_ = User.objects.filter(Q(username=user.get("username")) | Q(email=user.get("email"))).first()
        if user_ == None: return False

        if(user_.username == user.get("username")):
            raise DbIntegrityException("username")
        elif(user_.email == user.get("email")):
            raise DbIntegrityException("email")

        return False

    def create_user(self, user={}):
        user_exists = self.user_exists(user)        
        if user_exists: return
        # base_profile = Profile.objects.filter(profile_type=settings.BASE_PROFILE_NAME)
        base_profile = Profile.objects.get_or_create(profile_type=settings.BASE_PROFILE_NAME.get("profile_type"), price=settings.BASE_PROFILE_NAME.get("price"))
        base_profile = base_profile[0]
        new_user = User(
            username=user.get("username"),
            password=encrypt(user.get("password")).decode("utf8"),
            email=user.get("email"),
            full_name=user.get("full_name"),
            profile=base_profile
        )
        new_user.save()
        confirmation_code = self.create_confirmation_code(new_user)
        return confirmation_code, new_user

    def confirm_user(self, confirmation_code: str):
        code = ConfirmationCode.objects.filter(code=confirmation_code, expiration__gte=datetime.now()).first()
        if not code: 
            raise InvalidConfirmCodeException()
        user = code.user
        user.is_active = True
        user.save()
        code.delete()
        return user

    def login_user(self, user):
        db_user = User.objects.filter(email=user.get("email"), is_active=True).first()

        if not db_user:
            raise UserNotExistsException()

        decrypted_password = decrypt(db_user.password)

        if user.get("password") != decrypted_password:
            raise InvalidUserException()
        return db_user

    def delete_expired_users(self,):
        codes = ConfirmationCode.objects.filter(expiration__gte=datetime.now())
        for code in codes:
            user = code.user
            if not user.is_active: 
                user.delete()
            code.delete()

    def request_new_code(self, user_id: int):
        old_confirm_code =  ConfirmationCode.objects.filter(user_id=user_id).first()
        # user = User.objects.filter(user_id=user_id).first()
        if not old_confirm_code or not old_confirm_code.user:
            raise UserNotExistsException()
        user = old_confirm_code.user
        old_confirm_code.delete()
        new_code = self.create_confirmation_code(user)
        return new_code, user

