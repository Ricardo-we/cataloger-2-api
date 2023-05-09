import {
	changeSelectedLangName,
	changeSelectedLanguage,
} from "../redux/slices/language.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getLanguage } from "../libs/services/api/local-requests/getLanguage";
import { objectFindNestedKey } from "../libs/utils/json.utils";

/***
 * @useFixedLanguage
 * useFixedLanguage returns a language JSON based //!! not t function !!//
 * returns a pure json based on language it should have the same key values of t but without using
 * getServerSideProps.
 * Should only be used in cases where i18next language doesnt load
 * */
export default function useFixedLanguage(
	langName?: string,
	langNamespace: string = "common",
) {
	// const [fixedLanguage, setFixedLanguage] = useState<any | object>({});
	// const [isLoading, setIsLoading] = useState<boolean>(true);
	const user = useSelector((state: any) => state?.user?.user);
	const selectedLanguage = useSelector(
		(state: any) => state?.languages?.selectedLanguage,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (
			!selectedLanguage?.fixedLanguage ||
			Object.keys(selectedLanguage?.fixedLanguage).length <= 0 ||
			selectedLanguage?.selectedLangName !== user?.language
		) {
			getLanguage(user?.language || langName, langNamespace).then(
				(language) => {
					dispatch(changeSelectedLangName(user?.language));
					dispatch(changeSelectedLanguage(language));
				},
			);
		}
	}, [user?.language]);

	return selectedLanguage.fixedLanguage;
	// return { language: selectedLanguage.fixedLanguage };
}

/***
 * @useSafeFixedLanguage
 * Uses useFixedLanguage internaly but returns an object with getTranslation similar to t function
 * in i18next
 * */
export function useSafeFixedLanguage(
	langName?: string,
	langNamespace: string = "common",
): { getTranslation: (accessKey: string) => any } {
	const fixedLanguage = useFixedLanguage(langName, langNamespace);
	return {
		getTranslation: (accessKey: string) =>
			objectFindNestedKey(fixedLanguage, accessKey),
		// isLoading,
	};
}
