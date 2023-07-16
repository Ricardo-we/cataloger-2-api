import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import LoginForm from "./login/components/LoginForm";
import UsersService from "@/libs/services/api/UsersService";
import { useToastErrorHandler } from "@/hooks/useToastErrorHandler";
import { changeUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
import User from "@/types/User";
import BToaster from "@/components/display-components/Toast/BToaster";
import { useRouter } from "next/router";
import useUserAutoRedirect from "@/hooks/useUserAutoRedirect";

export default function Home() {
	const language = useSafeFixedLanguage();
	const [toast, handleError] = useToastErrorHandler();
	const dispatch = useDispatch();
	const router = useRouter();
	const userService = new UsersService(handleError);
	const user = useUserAutoRedirect();

	const onLogin = async (userData: { email: string; password: string }) => {
		const response = await userService.login(userData);
		dispatch(changeUser(response as Partial<User>));
		toast.success(
			language.getTranslation("module.login.loggedInSuccessfully")
		);
		return response;
	};

	return (
		<>
			<BToaster />
			<main className={`flex items-center justify-center h-screen`}>
				<LoginForm
					onSubmit={onLogin}
					initialValues={{
						email: "",
						password: "",
					}}
				/>
			</main>
		</>
	);
}
