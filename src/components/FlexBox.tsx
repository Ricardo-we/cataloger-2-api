import { Box, BoxProps } from "@mui/material";
import { FC, HTMLAttributes, forwardRef } from "react";

export interface FlexBoxProps extends BoxProps {
	direction?: "row" | "row-reverse" | "column" | "column-reverse";
	align?: "center" | "flex-start" | "flex-end";
	wrap?: "wrap" | "nowrap" | "wrap-reverse";
	justify?:
		| "space-evenly"
		| "space-between"
		| "space-around"
		| "flex-start"
		| "flex-end"
		| "center";
}

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(
	(
		{
			direction = "row",
			align = "center",
			wrap = "wrap",
			justify = "space-evenly",
			style,
			...props
		},
		ref
	) => {
		return (
			<Box
				{...props}
				sx={{
					display: "flex",
					flexDirection: direction,
					alignItems: align,
					flexWrap: wrap,
					justifyContent: justify,
					...props.sx,
				}}
				ref={ref}
			>
				{props.children}
			</Box>
		);
	}
);

FlexBox.displayName = "FlexBox";

export default FlexBox;
