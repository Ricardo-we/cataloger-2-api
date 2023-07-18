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
	const { catalogs = [], user: catalogOwner = {} } =
		catalogFetcher.data ?? {};
    
	return (
		<main>
			<Text variant="h5">
				{lang.getTranslation("module.catalogs.catalogsOf")}{" "}
				{catalogOwner.fullName}
			</Text>
			<FlexBox direction="row" align="center" justify="space-evenly">
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
