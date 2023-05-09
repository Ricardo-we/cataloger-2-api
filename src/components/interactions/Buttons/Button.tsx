import { variantEquivalents } from "@/styles/variantEquivalents";
import { Variants } from "@/types/Variants";
import { ButtonHTMLAttributes, FC, HTMLProps } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants;
}

const buttonVariants = {
    primary: `bg-primary hover:primary text-white font-bold py-2 px-4 rounded`,
    secondary: `bg-secondary hover:secondary text-white font-bold py-2 px-4 rounded`,
    info: `bg-info hover:info text-white font-bold py-2 px-4 rounded`,
    error: `bg-error hover:error text-white font-bold py-2 px-4 rounded`,
    success: `bg-success hover:success text-white font-bold py-2 px-4 rounded`,
}

const Button: FC<ButtonProps> = ({ variant = "primary",type="button", ...props }) => {

    return (
        <button
            {...props}
            type={type}
            className={buttonVariants[variant] + " " + props.className}
        />
    );
}

export default Button;