import { Children } from "@/types/Children";
import { ColorVariants } from "@/types/ColorVariants";
import { Button } from "@mui/material";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface BLinkProps extends LinkProps {
	color?: ColorVariants;
	children?: Children;
}

const BLink: FC<BLinkProps> = ({ color = "primary", children, ...props }) => {
	return (
		<Link {...props}>
			<Button variant="text" color={color}>
				{children}
			</Button>
		</Link>
	);
};

export default BLink;
