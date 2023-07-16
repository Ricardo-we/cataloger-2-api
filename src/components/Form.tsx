import { FC, HTMLProps } from "react";

interface FormProps extends HTMLProps<HTMLFormElement> {
    preventDef?: boolean;
}

const Form: FC<FormProps> = ({ children, preventDef=false, ...props }) => {
    return (
        <form
            {...props}
            onSubmit={(e) => {
                if(preventDef) e.preventDefault();
                props.onSubmit && props?.onSubmit(e);
            }}
            // className={ props.className}
        >
            {children}
        </form>
    );
}

export default Form;