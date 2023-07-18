import {
	AppBar,
	Button,
	Chip,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	useTheme,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Home as HomeIcon,
	Info as InfoIcon,
} from "@mui/icons-material";
import { FC, useState } from "react";
import Text from "../display-components/Text/Text";
import AppIcon from "./AppIcon";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import NavBarItem from "./NavBarItem";
import FlexBox from "../FlexBox";
import BLink from "../interactions/BLink";
import { useUser } from "@/hooks/useUser";
import BPopover from "../interactions/Popover/BPopover";
import ButtonList from "../interactions/Buttons/ButtonList";
import { usePopover } from "@/hooks/usePopover";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);
	const language = useSafeFixedLanguage();
	const theme = useTheme();
	const user = useUser();
	const popover = usePopover();

	const toggleDrawer = () => {
		setOpenDrawer(!openDrawer);
	};

	return (
		<>
			<AppBar position="relative" color="transparent">
				<Toolbar color="white">
					<IconButton color="inherit" onClick={toggleDrawer}>
						{/* <MenuIcon /> */}
						<AppIcon size={70} />
					</IconButton>
					{/* <Text variant="h6">{language.t("general.appName")}</Text> */}
					<FlexBox sx={{ marginLeft: "auto" }}>
						{user?.id && user?.isActive ? (
							<BPopover
								visible={popover.active}
								anchorElement={popover.anchorElement}
								togglePopover={popover.togglePopover}
								popoverContent={
									<ButtonList
									listStyles={{width: "200px"}}
										buttonList={[
											{
												action(e) {
													console.warn(
														"Not implemented logout"
													);
												},
												label: language.t(
													"generic.logout"
												),
											},
										]}
									/>
								}
								positions={{horizontal: "center", vertical: "bottom"}}
							>
								<Chip
									onClick={(e) => {
										popover.togglePopover(e)
									}}
									// onMouseLeave={popover.closePopover}
									label={
										language.t("generic.currentUser") +
										" " +
										user.username
									}
									// color=""
								></Chip>
							</BPopover>
						) : (
							<BLink
								// variant="text"
								// style={{ textTransform: "none", fontWeight: "500" }}
								href="/"
							>
								{language.t("generic.logIn")}
							</BLink>
						)}
					</FlexBox>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
				<List sx={{ minWidth: "300px" }}>
					<ListItem>
						<ListItemIcon sx={{ marginRight: "10px" }}>
							<AppIcon size={80} />
						</ListItemIcon>
					</ListItem>

					<Divider />

					<NavBarItem
						icon={<HomeIcon />}
						text={language.t("generic.home")}
					/>

					{/* <NavBarItem
						icon={<HomeIcon />}
						text={language.t("generic.home")}
					/> */}
				</List>
			</Drawer>
		</>
	);
};

export default NavBar;
