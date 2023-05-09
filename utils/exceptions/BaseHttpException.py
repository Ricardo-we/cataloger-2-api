from .ExceptionTypes import exception_types
from utils.classes.TranslationsBuilder import get_translation_dict_by_headers

class BaseHttpException(Exception):
   def __init__(self) -> None:
        super().__init__()
        self.name = "BaseHttpException"
        self.type = exception_types["validation"]
        self.error = True
        self.status = 400

   def get_message(self, request):
      try:
         return get_translation_dict_by_headers(request).get(self.type).get(self.name).build()
      except Exception as e: 
         return ""