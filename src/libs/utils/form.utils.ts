export interface createFormOnSubmitHandlerOptions {
<<<<<<< HEAD
  resetOnSubmit: boolean;
=======
	resetOnSubmit: boolean;
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
}

type formikOnSubmitFunc = (values: any, helpers?: any) => any;

export const defaultSubmitHandler = async (
<<<<<<< HEAD
  values: any,
  formikHelpers: any,
  onSubmit?: formikOnSubmitFunc
) => {
  formikHelpers.setSubmitting(true);
  onSubmit && (await onSubmit(values, formikHelpers));
  formikHelpers.setSubmitting(false);
};

export function createFormOnSubmitHandler(
  onSubmit?: formikOnSubmitFunc,
  options?: createFormOnSubmitHandlerOptions
) {
  return async (values: any, formikHelpers: any) => {
    await defaultSubmitHandler(values, formikHelpers, onSubmit);
    if (options?.resetOnSubmit) formikHelpers.resetForm();
  };
=======
	values: any,
	formikHelpers: any,
	onSubmit?: formikOnSubmitFunc,
) => {
	formikHelpers.setSubmitting(true);
	onSubmit && (await onSubmit(values, formikHelpers));
	formikHelpers.setSubmitting(false);
};

export function createFormOnSubmitHandler(
	onSubmit?: formikOnSubmitFunc,
	options?: createFormOnSubmitHandlerOptions,
) {
	return async (values: any, formikHelpers: any) => {
		await defaultSubmitHandler(values, formikHelpers, onSubmit,);
		if (options?.resetOnSubmit) formikHelpers.resetForm();
	};
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
}
