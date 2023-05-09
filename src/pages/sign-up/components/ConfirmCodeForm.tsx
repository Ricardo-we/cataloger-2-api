import Form from "@/components/Form";
import Text from "@/components/display-components/Text/Text";
import Title from "@/components/display-components/Text/Title";
import Button from "@/components/interactions/Buttons/Button";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import { BaseForm } from "@/types/BaseForm";
import { useFormik } from "formik";
import { FC, useState } from "react";
import VerificationInput from "react-verification-input";

interface ConfirmCodeFormProps extends BaseForm { }

const ConfirmCodeForm: FC<ConfirmCodeFormProps> = ({ onSubmit }) => {
    // const formik = useFormik({})
    const language = useSafeFixedLanguage();
    const [code, setCode] = useState<string>("");

    const handleSubmit = () => {
        onSubmit({ code });
    };

    return (
        <Form onSubmit={handleSubmit} preventDef style={{ display: "flex", gap: "10px",  flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Title variant="h7" >{language.getTranslation("generic.confirmCode")}</Title>

            <VerificationInput
                onChange={setCode}
                length={4}
                validChars={"0-9"}
                classNames={{
                    container: "w-100 my-2"
                }}
            />
            
            <Text fSize="lg" className="text-black text-base">
                {language.getTranslation("module.confirm-code.description")}
            </Text>

            <Button
                variant="primary"
                className="w-full"
                type="submit"
                // onClick={handleSubmit}
            >
                {language.getTranslation("action.confirm")}
            </Button>
        </Form>
    );
}

export default ConfirmCodeForm;