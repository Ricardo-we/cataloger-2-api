import { CSSProperties } from "react";
import { FC } from "react";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	useTheme,
} from "@mui/material";
import { Children } from "@/types/Children";
import Text from "@/components/display-components/Text/Text";

interface BButtonListProps {
	listStyles?: CSSProperties;
	buttonListStyle?: CSSProperties;
	buttonList: Array<{
		action?: (e: any) => any;
		children?: Children;
		label?: string;
	}>;
}

const ButtonList: FC<BButtonListProps> = ({ ...props }) => {
	const theme = useTheme();

	return (
		<List style={props.listStyles} disablePadding>
			{props.buttonList?.map((button, index) => (
				<ListItem key={index} disablePadding>
					<ListItemButton
						style={props.buttonListStyle}
						onClick={button.action}
					>
						{button?.label ? (
							<ListItemText primary={button.label} />
						) : (
							button?.children ?? ""
						)}
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};
export default ButtonList;
