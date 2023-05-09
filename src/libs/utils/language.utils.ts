import * as yup from "yup";

import { LanguageObj } from "../../types/Language";

import { incrementativeJoin } from "./array.utils";
import { replaceWithList } from "./string.utils";

export class LanguageUtils {
	static processDynamicLabel = (
		language: LanguageObj,
		dynamicTranslationKey: string,
		translationReplaceKeys: string[]
	) => {
		const translate = LanguageUtils.getTranslator(language);
		return LanguageUtils.rawProcessDynamicLabel(
			language,
			dynamicTranslationKey,
			translationReplaceKeys?.map(t => translate(t))
		);
	};

	static getActionMessage = (
		language: LanguageObj,
		action: string,
		entityTranslationKey: string
	) => {
		return LanguageUtils.processDynamicLabel(language, `action.${action}`, [
			entityTranslationKey,
		]);
	};

	static rawProcessDynamicLabel = (
		language: LanguageObj,
		dynamicTranslationKey: string,
		replaceItems: any[]
	) => {
		const translate = LanguageUtils.getTranslator(language);
		return replaceWithList(translate(dynamicTranslationKey), replaceItems);
	};

	static getRoutePathLabels = (language: any, currentPath: string) => {
		const translate = this.getTranslator(language);
		const splittedItems = currentPath.slice(1).split("/");
		const translatedItems = splittedItems.map(path => {
			return translate(`general.routes.${path}`);
		});

		return [translatedItems, incrementativeJoin(splittedItems, "/")];
	};

	static makeErrorLabel(
		language: LanguageObj,
		fieldName: string,
		errType: string
	) {
		const translate = LanguageUtils.getTranslator(language);
		return replaceWithList(translate(`errors.${errType}`), [
			translate(`fields.${fieldName}`),
		]);
	}

	static getTranslator(language: LanguageObj | any) {
		return (translationKey: string) =>
			language?.t
				? language?.t(translationKey)
				: language?.getTranslation(translationKey);
	}

	static getRequiredLabel(
		language: LanguageObj | any,
		fieldName: string
	) {
		return LanguageUtils.makeErrorLabel(language, fieldName, "required");
	}

	static getTypeErrorLabel(
		language: LanguageObj | any,
		fieldName: string
	) {
		return LanguageUtils.makeErrorLabel(language, fieldName, "typeError");
	}
}

export class InstancedLanguageUtils {
	language: any;

	constructor(language: LanguageObj) {
		this.language = language;
	}

	processDynamicLabel = (
		dynamicTranslationKey: string,
		translationReplaceKeys: string[]
	) => {
		return LanguageUtils.processDynamicLabel(
			this.language,
			dynamicTranslationKey,
			translationReplaceKeys
		);
	};

	rawProcessDynamicLabel = (
		dynamicTranslationKey: string,
		replaceItems: any[]
	) => {
		return LanguageUtils.rawProcessDynamicLabel(
			this.language,
			dynamicTranslationKey,
			replaceItems
		);
	};

	getActionMessage = (action: string, entityTranslationKey: string) => {
		return LanguageUtils.processDynamicLabel(
			this.language,
			`action.${action}`,
			[entityTranslationKey]
		);
	};
}
