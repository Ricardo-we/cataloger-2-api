import { Children } from "@/types/Children";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { FC } from "react";

interface NavBarItemProps {
	icon: Children;
	text: string;
}

const NavBarItem: FC<NavBarItemProps> = ({ icon, text,}) => {
	return (
		<ListItemButton>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={text} />
		</ListItemButton>
	);
};

export default NavBarItem;
