import { FC } from "react";
import MuiPopover from "@mui/material/Popover";
import { Children } from "@/types/Children";

interface PopoverWrapperProps {
	visible?: boolean;
	togglePopover?: () => any;
	popoverContent?: Children;
	children?: Children;
	// positions?: PopoverPosition[];
	positions?: {
		horizontal: "left"|"right" | "center",
		vertical: "top" | "bottom" | "center"
	};
	id?: string;
	anchorElement?: Element;
}

const BPopover: FC<PopoverWrapperProps> = ({
	visible = false,
	togglePopover,
	popoverContent,
	children,
	positions = { horizontal: "left", vertical:"bottom" },
	id,
	anchorElement,
	...props
}) => {
	return (
		<>
			{children}
			<MuiPopover
				id={id}
				open={visible}
				anchorEl={anchorElement}
				onClose={togglePopover}
				anchorOrigin={positions}
			>
				{popoverContent}
			</MuiPopover>
		</>
	);
};
export default BPopover;
