from public.locales.en import translations as en_translations
from public.locales.es import translations as es_translations
def get_translation_dict(locale="es"):
    if locale == "es":
        return es_translations
    else:
        return en_translations 
