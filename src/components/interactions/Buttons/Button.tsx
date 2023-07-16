import { variantEquivalents } from "@/styles/variantEquivalents";
import { Variants } from "@/types/Variants";
import { ButtonHTMLAttributes, FC, HTMLProps } from "react";
import {Button as MuiButton, ButtonProps as MuiButtonProps} from "@mui/material";

interface ButtonProps extends MuiButtonProps {
    // variant?: Variants;
}

const buttonVariants = {
    primary: `bg-primary hover:primary text-white font-bold py-2 px-4 rounded`,
    secondary: `bg-secondary hover:secondary text-white font-bold py-2 px-4 rounded`,
    info: `bg-info hover:info text-white font-bold py-2 px-4 rounded`,
    error: `bg-error hover:error text-white font-bold py-2 px-4 rounded`,
    success: `bg-success hover:success text-white font-bold py-2 px-4 rounded`,
}

const Button: FC<ButtonProps> = ({ variant = "contained",type="button", ...props }) => {

    return (
        <MuiButton variant={variant} {...props}/>
        // <button
        //     {...props}
        //     type={type}
        //     className={buttonVariants[variant] + " " + props.className}
        // />
    );
}

export default Button;