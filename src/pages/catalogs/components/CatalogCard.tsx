import FlexBox from "@/components/FlexBox";
import Text from "@/components/display-components/Text/Text";
import { isUrl } from "@/libs/utils/string.utils";
import { Catalog } from "@/types/Catalog";
import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";
interface CatalogCardProps {
	catalog: Catalog;
}

const CatalogCard: FC<CatalogCardProps> = ({ catalog }) => {
	const router = useRouter();
	const theme = useTheme();

	return (
		<FlexBox
			sx={{
				height: "300px",
				width: "300px",
				background: isUrl(catalog.background) ? `url(${catalog.background}) ` : catalog.background,
				backgroundSize: "cover",
				backgroundPosition: "center",
				":hover": {
					// padding: "40px",
					transform: "scale(1.01)"
				},
				// transitionDelay:"3ms",
				transition: "all 0.2s ease-in",
				// transition: "box-shadow 1s ease",
                cursor: "pointer",
				border: `1px solid ${theme.palette.primary.main}`,
				borderRadius: "10px",
			}}
			onClick={() => {
				router.push(`/catalog/${catalog?.id}`)				
			}}
		>
			<Text variant="h4">{catalog.name}</Text>
		</FlexBox>
	);
};

export default CatalogCard;
