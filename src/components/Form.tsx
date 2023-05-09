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
            className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " + props.className}
        >
            {children}
        </form>
    );
}

export default Form;