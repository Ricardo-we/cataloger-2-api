export const languageCodesToCountrie: any = {
<<<<<<< HEAD
  es: "es",
  en: "us",
};

export function getValidLocaleByLanguageCode(langCode: string) {
  return languageCodesToCountrie?.[langCode] ?? languageCodesToCountrie["es"];
}
=======
    es: "es",
    en: "us"
}

export function getValidLocaleByLanguageCode(langCode: string){
    return languageCodesToCountrie?.[langCode] ?? languageCodesToCountrie["es"];
}
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
