// import { useToast, useToastOptions } from "../components/BToaster";
import { toast, ToastOptions } from "react-toastify";
import { getResponseErrorHandler } from "../libs/utils/error.utils";
import { useToast } from "./useToast";

const defaultOptions: ToastOptions = {
	delay: 2000,
	autoClose: 2000	
}

export function useToastErrorHandler(onError?: (err: any) => any, options: ToastOptions = defaultOptions,) {
	// const toast = useToast();
	const errorHandler = getResponseErrorHandler((err) => {
		toast.error(err?.message || "", {
			toastId: "error-toast"
		});
		onError && onError(err);
		return err;
	});

	return [toast, errorHandler] as const;
}