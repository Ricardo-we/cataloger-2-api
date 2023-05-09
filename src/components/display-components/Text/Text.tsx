import { FC, HTMLProps } from "react";

interface TextProps extends HTMLProps<HTMLParagraphElement> {
    fSize?: "xs" | "lg" | "base";
}

const Text: FC<TextProps> = ({fSize="base", ...props}) => {
    return ( 
        <p 
            className={props.className + " " + `text-${fSize}`}
            {...props}
        />
    );
}

export default Text;