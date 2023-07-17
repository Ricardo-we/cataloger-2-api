import FlexBox from "@/components/FlexBox";
import Form from "@/components/Form";
import AppIcon from "@/components/app_components/AppIcon";
import Text from "@/components/display-components/Text/Text";
import Title from "@/components/display-components/Text/Title";
import Button from "@/components/interactions/Buttons/Button";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import { BaseForm } from "@/types/BaseForm";
import { useFormik } from "formik";
import Image from "next/image";
import { FC, useState } from "react";
import VerificationInput from "react-verification-input";
import styles from "@/styles/confirm-code.module.css";
import { ToastContainer, toast } from "react-toastify";
import UsersService from "@/libs/services/api/UsersService";
import useUserAutoRedirect from "@/hooks/useUserAutoRedirect";

interface ConfirmCodeFormProps extends BaseForm {}

const ConfirmCodeForm: FC<ConfirmCodeFormProps> = ({ onSubmit }) => {
	const language = useSafeFixedLanguage();
	const [code, setCode] = useState<string>("");
    const user = useUserAutoRedirect();
    const userService = new UsersService().getConfigByUser(user).setShowFullResponse(true);

	const handleSubmit = () => {
		onSubmit({ code });
	};

	const requestNewCode = async () => {
        if(!user) return;
        const response = await userService.find({ routeParams: `/new-code/${user?.id}` });
        if(response?.status === 200 || response?.status === 201){
            toast.success(language.getTranslation("module.confirm-code.newCodeRequestedSuccessfully"));
        }
    };

	return (
		<FlexBox direction="column" align="flex-start" justify="center">
			<AppIcon />
			<Form
				onSubmit={handleSubmit}
				preventDef
				style={{
					display: "flex",
					gap: "40px",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "50px",
					marginInline: "auto",
					maxWidth: "400px",
				}}
			>
				<Image
					src="/assets/images/confirm-code.png"
					alt="confirm-code"
					width={200}
					height={200}
				/>

				<Title variant="h5">
					{language.getTranslation("generic.confirmCode")}
				</Title>

				<VerificationInput
					onChange={setCode}
					length={4}
					validChars={"0-9"}
					classNames={{
						character: styles.character,
					}}
				/>

				<Text variant="subtitle2" textAlign="center">
					{language.getTranslation("module.confirm-code.description")}
				</Text>

				<FlexBox direction="column" align="center" sx={{width: "100%"}}>
					<Button
						disabled={code.length < 4}
						type="submit"
						onClick={handleSubmit}
						sx={{ width: "100%" }}
					>
						{language.getTranslation("action.confirm")}
					</Button>

					<Button
						onClick={requestNewCode}
						sx={{ width: "100%", textTransform: "none" }}
						variant="text"
					>
						{language.getTranslation("action.requestNewCode")}
					</Button>
				</FlexBox>
			</Form>
		</FlexBox>
	);
};

export default ConfirmCodeForm;
