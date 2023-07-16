import { FC, HTMLAttributes, forwardRef } from "react";

export interface FlexBoxProps extends HTMLAttributes<HTMLDivElement> {
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

const FlexBox =  forwardRef<HTMLDivElement, FlexBoxProps>(({
	direction="row",
	align="center",
	wrap = "wrap",
	justify="space-evenly",
	style,
    ...props
}, ref) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: direction,
				alignItems: align,
				flexWrap: wrap,
				justifyContent: justify,
                ...style,
			}}
			ref={ref}
            {...props}
		>
            {props.children}
        </div>
	);
});

FlexBox.displayName = "FlexBox";

export default FlexBox;
