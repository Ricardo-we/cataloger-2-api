import * as yup from "yup";

import { InstancedLanguageUtils, LanguageUtils } from "../language.utils";

import { LanguageObj } from "../../../types/Language";
import { Validator } from "../../../types/Validator";
import { errorsLanguageKeys } from "./BaseValidator";

export class ObjectValidator implements Validator {
<<<<<<< HEAD
  schema: yup.AnyObjectSchema;
  fieldName: string;
  language: LanguageObj;
  languageUtils: InstancedLanguageUtils;
  translatedFieldName: string;

  constructor(
    fieldName: string,
    language: any,
    fieldNameSpace: string = "fields",
    object?: any
  ) {
    this.language = language;
    this.languageUtils = new InstancedLanguageUtils(this.language);

    this.fieldName = fieldName;
    this.schema = yup.object(object);

    const translate = LanguageUtils.getTranslator(language);
    this.translatedFieldName = translate(`${fieldNameSpace}.${this.fieldName}`);
    this.schema = this.schema.typeError(
      this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.typeError, [
        this.translatedFieldName,
      ])
    );
  }

  required = () => {
    this.schema = this.schema.required(
      this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.required, [
        this.translatedFieldName,
      ])
    );
    return this;
  };

  build = () => this.schema;
=======
	schema: yup.AnyObjectSchema;
	fieldName: string;
	language: LanguageObj;
	languageUtils: InstancedLanguageUtils;
	translatedFieldName: string;

	constructor(
		fieldName: string,
		language: any,
		fieldNameSpace: string = "fields",
        object?: any
	) {
		this.language = language;
		this.languageUtils = new InstancedLanguageUtils(this.language);

		this.fieldName = fieldName;
		this.schema = yup.object(object);

		const translate = LanguageUtils.getTranslator(language);
		this.translatedFieldName = translate(
			`${fieldNameSpace}.${this.fieldName}`,
		);
        this.schema = this.schema.typeError(this.languageUtils.rawProcessDynamicLabel(
            errorsLanguageKeys.typeError,
            [this.translatedFieldName],
        ),)
	}

	required = () => {
		this.schema = this.schema.required(
			this.languageUtils.rawProcessDynamicLabel(
				errorsLanguageKeys.required,
				[this.translatedFieldName],
			),
		);
		return this;
	};

    build = () => this.schema;
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
}
