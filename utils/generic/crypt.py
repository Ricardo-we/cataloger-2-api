from django.conf import settings
from cryptography.fernet import Fernet
import random

fernet_key = settings.ENCRYPTATION_KEY

def decrypt(encrypted: str):
    try:
        fernet = Fernet(fernet_key)
        return fernet.decrypt(encrypted.encode()).decode()
    except Exception as e:
        return None


def encrypt(plain_text: str):
    try:
        fernet = Fernet(fernet_key)
        return fernet.encrypt(plain_text.encode())
    except:
        return None

def generate_random_number_code(size: int):
    result = ""

    for i in range(size):
        result += str(random.randint(0,9))

    return result[0:size]