from utils.generic.locales import get_translation_dict

class TranslationsBuilder:
    def __init__(self, locale: str) -> None:
        self.language = get_translation_dict(locale)
        self.current_translation_item = "";

    def get(self,translation_key: str):
        try:
            if type(self.current_translation_item) is dict:
                translation_item = self.current_translation_item.get(translation_key) 
            else:
                translation_item = self.language.get(translation_key)  
            if translation_item != None:
                self.current_translation_item = translation_item
            return self
        except:
            return self

    def build(self):
        return self.current_translation_item if self.current_translation_item != None else ""

def get_translation_dict_by_headers(request):
    locale = request.headers.get("Accept-Language");
    return TranslationsBuilder(get_translation_dict(locale))