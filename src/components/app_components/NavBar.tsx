import {
	AppBar,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Home as HomeIcon,
	Info as InfoIcon,
} from "@mui/icons-material";
import { FC, useState } from "react";
import Text from "../display-components/Text/Text";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton color="inherit" onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
					<Text variant="h6">Mi Aplicación</Text>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
				<List>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Inicio" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary="Acerca de" />
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default NavBar;
