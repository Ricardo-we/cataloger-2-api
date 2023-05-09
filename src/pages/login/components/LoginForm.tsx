import { FC } from "react";
import Form from '@/components/Form'
import Input from '@/components/fields/Input'
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import Title from "@/components/display-components/Text/Title";
import Button from "@/components/interactions/Buttons/Button";
import { useFormik } from "formik";
import { BaseForm } from "@/types/BaseForm";
import { loginSchema } from "../helpers/schemas/loginSchema";
import Link from "next/link";

interface LoginFormProps extends BaseForm { }

const LoginForm: FC<LoginFormProps> = ({ initialValues={email: "", password: ""}, onSubmit, validationSchema }) => {
    const language = useSafeFixedLanguage();

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: validationSchema ?? loginSchema(language) 
    });

    return (
        <Form preventDef onSubmit={formik.handleSubmit} style={{ minWidth: "550px", maxHeight: "370px" }}>
            <Title variant="h7" >{language.getTranslation("generic.logIn")}</Title>
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
            />

            <Button variant="primary" style={{ width: "100%" }}>{language.getTranslation("generic.logIn")}</Button>

            <Link href="/sign-up" className="text-blue-400 py-3">{language.getTranslation("module.login.signUpLink")}</Link>
        </Form>
    );
}

export default LoginForm;