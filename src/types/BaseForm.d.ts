import { FormikHelpers } from "formik";

export type BaseForm = {
    initialValues?: {[key: string]: any} | any;
    onSubmit: (data: any, formikHelpers?: FormikHelpers<any>) => any;
    validationSchema?: any; 
}