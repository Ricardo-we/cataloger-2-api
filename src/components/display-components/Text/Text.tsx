import { Typography, TypographyProps } from "@mui/material";
import { FC, HTMLProps } from "react";

interface TextProps extends TypographyProps {}

const Text: FC<TextProps> = ({...props}) => {
    return ( 
        <Typography {...props}/>
    );
}

export default Text;