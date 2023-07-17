import { Box, SxProps } from "@mui/material";
import { FC, HTMLProps } from "react";
import FlexBox, { FlexBoxProps } from "./FlexBox";

interface FormProps extends HTMLProps<HTMLFormElement> {
	preventDef?: boolean;
	// flexBoxProps?: FlexBoxProps;
}

const Form: FC<FormProps> = ({
	children,
	preventDef = false,
	// flexBoxProps,
	...props
}) => {
	return (
		<form
			{...props}
			onSubmit={(e) => {
				if (preventDef) e.preventDefault();
				props.onSubmit && props?.onSubmit(e);
			}}
			// className={ props.className}
		>
			{/* <FlexBox {...flexBoxProps}> */}
			{children}
			{/* </FlexBox> */}
		</form>
	);
};

export default Form;
