import { FC } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import UsersService from "@/libs/services/api/UsersService";
import { useToastErrorHandler } from "@/hooks/useToastErrorHandler";
import { changeUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
import User from "@/types/User";
import BToaster from "@/components/display-components/Toast/BToaster";
import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import SignUpForm from "./components/SignUpForm";
import useUserAutoRedirect from "@/hooks/useUserAutoRedirect";

interface SignUpViewProps {}

const SignUpView: FC<SignUpViewProps> = () => {
	const language = useSafeFixedLanguage();
	const [toast, handleError] = useToastErrorHandler();
	const dispatch = useDispatch();
	const router = useRouter();
	const user = useUserAutoRedirect();
	const userService = new UsersService(handleError)
		.getConfigByUser(user)
		.setShowFullResponse(true);

	const onSignUp = async (userData: User) => {
		const response = await userService.signUp(userData);
		if ([200, 201].includes(response?.status)) {
			toast.success(
				language.getTranslation("module.signup.signUpSuccessfully")
			);
			dispatch(changeUser(response.data));
			router.push("/sign-up/confirm-code");
		}
		return response;
	};

	return (
		<>
			{/* <BToaster /> */}

			<SignUpForm
				onSubmit={onSignUp}
				// initialValues={{
				// 	email: "",
				// 	password: ""
				// }}
			/>
		</>
	);
};

export default SignUpView;
