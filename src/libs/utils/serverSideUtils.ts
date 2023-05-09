import { AvailableLanguages } from "../../types/AvailableLanguages";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface GetLanguageServerSideProps {
    locale: AvailableLanguages;
    defaultLocale: AvailableLanguages;
}

export function getLanguageServerSideProps(nameSpaces = ["common"]) {
    return async ({ locale, defaultLocale }: GetLanguageServerSideProps) => ({
        props: {
            ...(await serverSideTranslations(
                locale || defaultLocale,
                nameSpaces
            )),
            // Will be passed to the page component as props
        },
    });
}
