import { useEffect, useState } from "react";

import SelectorItemsService from "../libs/services/api/Selectors/SelectorItemsService";
import { makeDictFromArray } from "../libs/utils/json.utils";
import { safeJsonParse } from "../libs/utils/general";

const selectorItemsKey = "selectors";
export function useSelectorItems(selectorCode: string, userToken: string, language?: string) {
	const selectorItemService = new SelectorItemsService();
	const [selectorItems, setSelectorItems] = useState<any[]>([]);

	useEffect(() => {
		let savedSelectorItems = safeJsonParse(localStorage.getItem("selectors"));
		if (!localStorage.getItem(selectorItemsKey)) {
			localStorage.setItem(selectorItemsKey, JSON.stringify({}));
			savedSelectorItems = {};
		} else if (savedSelectorItems[selectorCode])
			return setSelectorItems(savedSelectorItems[selectorCode]);

		if (userToken && !savedSelectorItems[selectorCode]) selectorItemService
			.setToken(userToken)
			.setLanguage(language ?? "es")
			.findSelectorItems(selectorCode)
			.then((res) => {
				setSelectorItems(res)
				localStorage.setItem(selectorItemsKey, JSON.stringify({ ...savedSelectorItems, [selectorCode]: res }));
			});
	}, [userToken]);

	useEffect(() =>{
		let savedSelectorItems = safeJsonParse(localStorage.getItem(selectorItemsKey));
		if(!savedSelectorItems[selectorCode] && selectorItems && selectorItems?.length > 0)
			localStorage.setItem(selectorItemsKey, JSON.stringify({...savedSelectorItems, [selectorCode]: selectorItems}));
	}, [selectorItems])

	return selectorItems;
}

export function useSelectorItemsDict(selectorCode: string, userToken: string) {
	return makeDictFromArray(useSelectorItems(selectorCode, userToken), "code");
}