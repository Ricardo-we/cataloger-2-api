import { FC } from "react";
import ConfirmCodeForm from "./components/ConfirmCodeForm";
import UsersService from "@/libs/services/api/UsersService";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import { useToastErrorHandler } from "@/hooks/useToastErrorHandler";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useUserAutoRedirect from "@/hooks/useUserAutoRedirect";
import BToaster from "@/components/display-components/Toast/BToaster";
import { changeUser } from "@/redux/slices/user.slice";
interface ConfirmCodeViewProps { }

const ConfirmCodeView: FC<ConfirmCodeViewProps> = () => {
    const language = useSafeFixedLanguage();
    const [toast, handleError] = useToastErrorHandler();
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useUserAutoRedirect();
    const usersService = new UsersService(handleError).getConfigByUser(user).setShowFullResponse(true);

    const onConfirmCode = async ({ code }: { code: string }) => {
        const response = await usersService.confirmUserCode(code);
        const createdUser = response?.data;

        if ([204, 200].includes(response?.status)) {
            toast.success(language.getTranslation("module.signup.signUpSuccessfully"))
            dispatch(changeUser({...user, ...createdUser}))
            router.push("/home")
        } else {
            toast.error(response.message, );
        }

        return response;
    }

    return (
        <>
            {/* <BToaster /> */}
            <main
                className={`flex items-center justify-center h-screen`}
            >
                <ConfirmCodeForm
                    onSubmit={onConfirmCode}
                />
            </main>
        </>
    );
}

export default ConfirmCodeView;