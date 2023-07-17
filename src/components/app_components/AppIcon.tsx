import Image from "next/image";
import { FC } from "react";

interface AppIconProps {
    size?: number;
};

const AppIcon: FC<AppIconProps> = ({ size=90 }) => {
	return (
		<Image
			src={"/assets/images/cataloger.png"}
			alt=""
			width={size}
			height={size}
		/>
	);
};

export default AppIcon;
