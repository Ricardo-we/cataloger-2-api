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

interface SignUpFormProps extends BaseForm { }

export const signUpPlainInitialValues = { username: "", email: "", password: "", fullName: "" }

const SignUpForm: FC<SignUpFormProps> = ({ initialValues = signUpPlainInitialValues, onSubmit, validationSchema }) => {
    const language = useSafeFixedLanguage();

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: validationSchema ?? signUpSchema(language)
    });

    return (
        <Form preventDef onSubmit={formik.handleSubmit} style={{ minWidth: "550px" }}>
            <Title variant="h7" style={{marginBottom: "10px"}}>{language.getTranslation("generic.signUp")}</Title>

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
                variant="primary"
                style={{ width: "100%" }}
                type="submit"
                // onClick={() => formik.submitForm()}
            >
                {language.getTranslation("generic.signUp")}
            </Button>

            <Link href="/login" className="text-blue-400 py-3">
                {language.getTranslation("module.signup.loginLink")}
            </Link>
        </Form>
    );
}

export default SignUpForm;