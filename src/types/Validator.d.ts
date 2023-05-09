import { AnySchema } from "yup";

export interface Validator {
  schema: AnySchema;
  fieldName: string;
  language: any;
  build: () => AnySchema;
}
