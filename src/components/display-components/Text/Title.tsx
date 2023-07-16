import { Typography, TypographyProps } from "@mui/material";
import { FC, HTMLProps } from "react";

interface TitleProps extends TypographyProps {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


const Title: FC<TitleProps> = ({variant="h4", ...props}) => {
    return <Typography variant={variant} {...props}></Typography>;
    // if(Number(variant.split("")?.at(-1)) > 3) return <h4 className={textSizeEquivalent[variant] + " text-gray-900 "} {...props} />    
    // return <h2 className={textSizeEquivalent[variant] + " text-gray-900 "} {...props}/>
}

export default Title;