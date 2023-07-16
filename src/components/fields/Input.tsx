import { CSSProperties, FC } from "react";
import {
	InputAdornment,
	InputProps,
	StandardTextFieldProps,
	TextField,
	TextFieldProps,
} from "@mui/material";
import { Children } from "@/types/Children";


// import { getISODate } from "../../utils/generic/date.utils";

interface BInputProps extends StandardTextFieldProps {
	error?: any;
	name?: string;
	value?: any;
	// variant?: "filled" | "standard" | "outlined";
	onChange?: (data: any) => any;
	style?: CSSProperties;
	type?: string;
	label?: string;
	rows?: number;
	multiline?: boolean;
	maxRows?: number;
	disabled?: boolean;
	autoFocus?: boolean;
	inputColors?: string;
	rightAdorment?: Children;
	leftAdorment?: Children;
	max?: number;
	min?: number;
	rightOutAdorment?: string;
	leftOutAdorment?: string;
}

const BInput: FC<BInputProps> = ({
	leftAdorment,
	rightAdorment,
	error = "",
	name = "",
	onChange,
	value,
	variant = "outlined",
	disabled = false,
	inputColors,
	max,
	min,
	rightOutAdorment,
	leftOutAdorment,
	...props
}) => {
	const hasOutAdorments = !!leftOutAdorment || !!rightOutAdorment;
	const hasError = error?.length > 0;

	return <TextField
		{...props}
		helperText={error}
		variant="standard"
		error={hasError}
		name={name}
		onChange={onChange}
		value={value}
		style={{
			width: "100%",
			color: inputColors,
			maxWidth: props.multiline ? "100%" : undefined,
			...props.style,
			height: hasOutAdorments ? "auto" : props?.style?.height,
			// margin: 0,
		}}
		InputLabelProps={{
			shrink: !!value || props.autoFocus,
			style: {
				...props.style,
				color: inputColors,
			},
			// ...props.InputLabelProps
		}}
		inputProps={{
			style: { color: inputColors },
			max,
			min
		}}
		InputProps={{
			endAdornment: rightAdorment,
			startAdornment: leftAdorment,
		}}
		disabled={disabled}
	/>;
};

export default BInput;
