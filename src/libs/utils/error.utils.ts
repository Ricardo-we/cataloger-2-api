import { AxiosError } from "axios";

export interface ErrorMessageData {
    key?: string;
    name?: string;
    message?: string;
}

const errorResponseHandler = (
    error: AxiosError<any>,
    cb: (errorMessage: ErrorMessageData) => any
) => {
    const response = error?.response?.data
    const responseErrors = response?.errors;

    if (response?.error) return cb({ message: response?.error });
    if (!responseErrors || responseErrors?.length <= 0) return;

    error?.response?.data?.errors?.forEach((errorMessage: ErrorMessageData) => {
        cb(errorMessage);
    });
    return error?.response?.data?.errors;
};

export function getResponseErrorHandler(
    cb: (errorMessage: ErrorMessageData) => any
) {
    return (error: AxiosError) => errorResponseHandler(error, cb);
}
