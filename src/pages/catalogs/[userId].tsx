import { useFetcher } from "@/hooks/useRequest";
import { useToastErrorHandler } from "@/hooks/useToastErrorHandler";
import { useUser } from "@/hooks/useUser";
import { CatalogsService } from "@/libs/services/api/CatalogsService";
import { Catalog } from "@/types/Catalog";
import { GetServerSideProps } from "next";
import { FC, useEffect } from "react";
import CatalogCard from "./components/CatalogCard";
import FlexBox from "@/components/FlexBox";
import { Title } from "@mui/icons-material";
import { useSafeFixedLanguage } from "@/hooks/useFixedLanguage";
import Text from "@/components/display-components/Text/Text";
import NavBar from "@/components/app_components/NavBar";
import { useTheme } from "@mui/material";

interface CatalogsProps {
	// catalogs: Catalog[];
	userId?: number;
}

const Catalogs: FC<CatalogsProps> = ({ userId }) => {
	const [toast, handleError] = useToastErrorHandler();
	const user = useUser();
	const catalogService = new CatalogsService(handleError).getConfigByUser(
		user
	);
	const lang = useSafeFixedLanguage();
	const catalogFetcher = useFetcher(
		"catalogs",
		() => userId && catalogService.findCatalogs(userId)
	);
	const theme = useTheme();
	const { catalogs = [], user: catalogOwner = {} } =
		catalogFetcher.data ?? {};

	return (
		<main style={{ margin: "10px", padding: 40 }}>
			<Text variant="h4" sx={{marginBottom:"20px", color: theme.palette.primary.main}} >
				{lang.getTranslation("module.catalogs.catalogsOf")}{" "}
				{catalogOwner.fullName}
			</Text>
			<FlexBox direction="row" align="center" justify="space-around" sx={{gap: "20px"}}>
				{catalogs?.map((catalog: Catalog, index: number) => (
					<CatalogCard key={index} catalog={catalog} />
				))}
			</FlexBox>
		</main>
	);
};

export const getServerSideProps: GetServerSideProps<any> = async ({
	query,
}) => {
	const { userId } = query;

	return {
		props: { userId },
	};
};

export default Catalogs;
