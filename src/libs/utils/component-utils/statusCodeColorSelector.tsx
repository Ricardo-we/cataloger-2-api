import { Theme } from "@mui/material";
import { SELECTOR_CODES } from "../../../settings/data/selectorCodes";

export const getStatusCodeColors = (
	theme: Theme | any,
	statusCode: any,
) => {
	const executionsChipColors = {
		[SELECTOR_CODES.EXSTA.PROCESS]: {
			backgroundColor: theme.palette?.onTertiaryContainer?.dark,
			color: theme.palette?.onTertiaryContainer?.light,
		},
		[SELECTOR_CODES.EXSTA.DONE]: {
			backgroundColor: theme.palette?.primary?.["90"],
			color: theme.palette?.primary?.["10"],
		},
		[SELECTOR_CODES.EXSTA.PENDING]: {
			backgroundColor: theme.palette?.secondary?.["90"],
			color: theme.palette?.secondary?.["10"],
		},
	};

	return (
		executionsChipColors[
			statusCode as keyof typeof SELECTOR_CODES.EXSTA
		] ?? executionsChipColors[SELECTOR_CODES.EXSTA.PENDING]
	);
};
