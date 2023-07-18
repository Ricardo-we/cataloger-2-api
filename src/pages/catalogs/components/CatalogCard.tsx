import FlexBox from "@/components/FlexBox";
import Text from "@/components/display-components/Text/Text";
import { Catalog } from "@/types/Catalog";
import { FC } from "react";
interface CatalogCardProps {
	catalog: Catalog;
}

const CatalogCard: FC<CatalogCardProps> = ({ catalog }) => {
	return (
		<FlexBox
			sx={{
				background: catalog.background ?? "#fff",
				":hover": {
					backgroundColor: "#B2A9A9",
				},
                cursor: "pointer"
			}}
		>
			<Text variant="h3">{catalog.name}</Text>
		</FlexBox>
	);
};

export default CatalogCard;
