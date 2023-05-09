import * as yup from "yup";

import { InstancedLanguageUtils, LanguageUtils } from "../language.utils";

import { LanguageObj } from "../../../types/Language";
import { Validator } from "../../../types/Validator";
import { errorsLanguageKeys } from "./BaseValidator";

export class DateValidator implements Validator {
<<<<<<< HEAD
  schema: yup.DateSchema;
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
    this.schema = yup.date();

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

  max = (size: Date) => {
    this.schema = this.schema.max(
      size,
      this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.max, [
        this.translatedFieldName,
        size,
      ])
    );
    return this;
  };

  min = (size: Date) => {
    this.schema = this.schema.min(
      size,
      this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.min, [
        this.translatedFieldName,
        size,
      ])
    );
    return this;
  };

  build = () => this.schema;
=======
	schema: yup.DateSchema;
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
		this.schema = yup.date();

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

    max = (size: Date) => {
		this.schema = this.schema.max(
			size,
			this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.max, [
				this.translatedFieldName,
				size,
			]),
		);
		return this;
	};

	min = (size: Date) => {
		this.schema = this.schema.min(
			size,
			this.languageUtils.rawProcessDynamicLabel(errorsLanguageKeys.min, [
				this.translatedFieldName,
				size,
			]),
		);
		return this;
	};

    build = () => this.schema;
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
}
