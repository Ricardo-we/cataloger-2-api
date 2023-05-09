import * as yup from "yup";

import { InstancedLanguageUtils, LanguageUtils } from "../language.utils";

import { Validator } from "@/types/Validator";
import { errorsLanguageKeys } from "./BaseValidator";

export class StringValidator implements Validator {
	schema: yup.StringSchema;
	fieldName: string;
	language: any;
	languageUtils: InstancedLanguageUtils;
	translatedFieldName: string;

	constructor(
		fieldName: string,
		language: any,
		fieldNameSpace: string = "fields"
	) {
		this.language = language;
		this.languageUtils = new InstancedLanguageUtils(this.language);

		this.fieldName = fieldName;
		this.schema = yup.string();

		const translate = LanguageUtils.getTranslator(language);
		this.translatedFieldName = translate(`${fieldNameSpace}.${this.fieldName}`);
	}

	max = (size: number) => {
		this.schema = this.schema.max(
			size,
			this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.maxLen, [
				this.translatedFieldName,
				size,
			])
		);
		return this;
	};

	min = (size: number) => {
		this.schema = this.schema.min(
			size,
			this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.minLen, [
				this.translatedFieldName,
				size,
			])
		);
		return this;
	};

	in = (elements: string[]) => {
		this.schema.is(
			elements,
			this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.minLen, [
				this.translatedFieldName,
				elements.join(","),
			])
		);
		return this;
		// this.schema = yup.addMethod(yup.string, "")
	};

	required = () => {
		this.schema = this.schema.required(
			this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.required, [
				this.translatedFieldName,
			])
		);
		return this;
	};

	email = () => {
		this.schema = this.schema.email(
			this.language.getTranslation("errors.invalidEmail")
		);
		return this;
	}

	build = () => this.schema;
}
