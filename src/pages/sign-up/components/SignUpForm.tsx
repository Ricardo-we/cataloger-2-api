import Title from "@/components/display-components/Text/Title";
import Input from "@/components/fields/Input";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import { BaseForm } from "@/types/BaseForm";
import { useFormik } from "formik";
import { FC } from "react";
import { signUpSchema } from "../helpers/schemas/signUpSchema";
import Button from "@/components/interactions/Buttons/Button";
import Form from "@/components/Form";
import ConfirmCodeForm from "./ConfirmCodeForm";
import Link from "next/link";
import { Box } from "@mui/material";
import Image from "next/image";
import FlexBox from "@/components/FlexBox";
import BLink from "@/components/interactions/BLink";
import styles from "@/styles/responsive-form.module.css";
import { useWindow, useWindowSize } from "@/hooks/useWindow";

interface SignUpFormProps extends BaseForm {}

export const signUpPlainInitialValues = {
	username: "",
	email: "",
	password: "",
	fullName: "",
};

const SignUpForm: FC<SignUpFormProps> = ({
	initialValues = signUpPlainInitialValues,
	onSubmit,
	validationSchema,
}) => {
	const language = useSafeFixedLanguage();
    const windowSize = useWindowSize();
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema: validationSchema ?? signUpSchema(language),
	});

	return (
		<FlexBox
			direction="row"
			wrap="nowrap"
			align="flex-start"
			justify="space-between"
			sx={{ maxHeight: "100vh", height: "100vh" }}
		>
			<Box
				sx={{
					display: { lg: "inline-block", md: "inline-block", sm: "none" },
					height: "100%",
					width: "45%",
				}}
			>
				<Image
					src={"/assets/images/login_left_side.jpg"}
					alt=""
					width={600}
					height={900}
					// fill
					style={{
						objectFit: "cover",
						width: "100%",
						height: "100%",
					}}
				/>
			</Box>

			<Form
				preventDef
				onSubmit={formik.handleSubmit}
				style={{
					width: windowSize?.innerWidth < 1200 ? "100%" :  "45%",
					marginInline: "60px",
					paddingInline: "40px",
					marginTop: "40px",
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-evenly",
					flexDirection: "column",
					gap: "20px",
				}}
                className={styles.responsiveForm}
			>
                <Image
					src={"/assets/images/cataloger.png"}
					alt=""
					width={180}
					height={180}
				/>
				<Title variant="h5" style={{ marginBottom: "10px" }}>
					{language.getTranslation("generic.signUp")}
				</Title>

				<Input
					name="username"
					type="text"
					label={language.getTranslation("fields.username")}
					onChange={formik.handleChange}
					value={formik.values.username}
					error={formik.errors.username as string}
				/>

				<Input
					name="email"
					type="email"
					label={language.getTranslation("fields.email")}
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.errors.email as string}
				/>

				<Input
					name="password"
					type="password"
					label={language.getTranslation("fields.password")}
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.errors.password as string}
				/>

				<Input
					name="fullName"
					type="text"
					label={language.getTranslation("fields.fullname")}
					onChange={formik.handleChange}
					value={formik.values.fullName}
					error={formik.errors.fullName as string}
				/>

				<Button
					style={{ width: "100%" }}
					type="submit"
					onClick={() => formik.submitForm()}
				>
					{language.getTranslation("generic.signUp")}
				</Button>

				<BLink href="/">
					{language.getTranslation("module.signup.loginLink")}
				</BLink>
			</Form>

		</FlexBox>
	);
};

export default SignUpForm;
