import { DetailedHTMLProps, FC, InputHTMLAttributes, HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    error?: string | string[];
}

const Input: FC<InputProps> = ({ label,error, ...props }) => {
    return (
        <div className="mb-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={label}
                {...props}
            />
            <label className="text-error">{error}</label>
        </div>
    );
}

export default Input;