import { FC } from "react";
import Form from "@/components/Form";
import Input from "@/components/fields/Input";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import Title from "@/components/display-components/Text/Title";
import Button from "@/components/interactions/Buttons/Button";
import { useFormik } from "formik";
import { BaseForm } from "@/types/BaseForm";
import { loginSchema } from "../helpers/schemas/loginSchema";
import Link from "next/link";
import FlexBox from "@/components/FlexBox";
import Image from "next/image";

interface LoginFormProps extends BaseForm {}

const LoginForm: FC<LoginFormProps> = ({
	initialValues = { email: "", password: "" },
	onSubmit,
	validationSchema,
}) => {
	const language = useSafeFixedLanguage();

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema: validationSchema ?? loginSchema(language),
	});

	return (
		<FlexBox
			direction="row"
			wrap="nowrap"
			align="flex-start"
			justify="space-between"
			style={{maxHeight: "100vh", height: "100vh"}}
		>
			<div style={{height: "100%", width: "45%"}}>
				<Image
					src={"/assets/images/login_left_side.jpg"}
					alt=""
					width={600}
					height={900}
					// fill
					style={{ objectFit: "cover", width: "100%", height: "100%" }}
				/>
			</div>

			<Form
				preventDef
				onSubmit={formik.handleSubmit}
				style={{
					width: "50%",
					padding: 20,
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-evenly",
					flexDirection: "column",
					gap: "30px"
					// minWidth: "500px",
					// maxHeight: "370px",
					// padding: "80px",
				}}
			>
				<Image
					src={"/assets/images/cataloger.png"}
					alt=""
					width={200}
					height={200}
				/>
				<Title variant="h6">
					{language.getTranslation("generic.logIn")}
				</Title>
				<Input
					name="email"
					type="email"
					label={language.getTranslation("fields.email")}
					onChange={formik.handleChange}
					error={formik.errors.email as string}
				/>

				<Input
					name="password"
					type="password"
					label={language.getTranslation("fields.password")}
					onChange={formik.handleChange}
					error={formik.errors.password as string}
					onKeyDown={(e) => {
						if (e.key === "Enter") formik.submitForm();
					}}
				/>

				<Button
					// variant="primary"
					color="primary"
					style={{ width: "100%" }}
					onClick={formik.submitForm}
				>
					{language.getTranslation("generic.logIn")}
				</Button>

				<Link href="/sign-up" className="text-blue-400 py-3">
					{language.getTranslation("module.login.signUpLink")}
				</Link>
			</Form>
		</FlexBox>
	);
};

export default LoginForm;
