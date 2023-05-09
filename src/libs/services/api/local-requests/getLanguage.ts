import axios from "axios";
import { appConfig } from "@/settings/index";
const LOCALES_PATH = "/locales";

export const getLanguage = async (
    langName: string,
    langNamespace: string,
    extensionName: string = ".json"
) => {
    try {
        const response = await axios.get(
            `${LOCALES_PATH}/${langName}/${langNamespace}${extensionName}`
        );
        return response.data;
    } catch (err) {
        const response = await axios.get(
            `${LOCALES_PATH}/${appConfig.FALLBACK_LANGUAGE}/common${extensionName}`
        );
        return response?.data;
    }
};
