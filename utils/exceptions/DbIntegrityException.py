from .BaseHttpException import BaseHttpException
from utils.classes.TranslationsBuilder import get_translation_dict_by_headers

class DbIntegrityException(BaseHttpException):
    def __init__(self, field) -> None:
        super().__init__()
        self.name = "DbIntegrityException"
        self.type = "validation"
        self.field = field

    def get_message(self, request):
        try:
            get_field_err_message = get_translation_dict_by_headers(request).get(self.type).get(self.name).build()
            return get_field_err_message(self.field)
        except Exception as e: 
             return ""
