import { FC } from "react";
import Form from "@/components/Form";
import Input from "@/components/fields/Input";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import Title from "@/components/display-components/Text/Title";
import Button from "@/components/interactions/Buttons/Button";
import { useFormik } from "formik";
import { BaseForm } from "@/types/BaseForm";
import { loginSchema } from "../helpers/schemas/loginSchema";
import FlexBox from "@/components/FlexBox";
import Image from "next/image";
import BLink from "@/components/interactions/BLink";
import { Box } from "@mui/material";
import styles from "@/styles/responsive-form.module.css";
import { useWindowSize } from "@/hooks/useWindow";

interface LoginFormProps extends BaseForm {}

const LoginForm: FC<LoginFormProps> = ({
	initialValues = { email: "", password: "" },
	onSubmit,
	validationSchema,
}) => {
	const language = useSafeFixedLanguage();
	const windowSize = useWindowSize();
	
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
					gap: "30px",
				}}
                className={styles.responsiveForm}
			>
				<Image
					src={"/assets/images/cataloger.png"}
					alt=""
					width={200}
					height={200}
				/>
				<Title variant="h5">
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

				<BLink href="/sign-up">
					{language.getTranslation("module.login.signUpLink")}
				</BLink>
			</Form>
		</FlexBox>
	);
};

export default LoginForm;
