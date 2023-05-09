import {
	SimpleDate,
	simpleDate,
	simpleDateFromObject,
} from "../objects/SimpleDate";

export function safeDateParse(date: string | Date | null = new Date()): Date {
	try {
		if (!date) return new Date();
		return new Date(date);
	} catch (error) {
		return new Date();
	}
}

export function getISODateTime(date?: string | Date | null): string {
	try {
		return safeDateParse(date)?.toISOString();
	} catch (error) {
		return safeDateParse().toISOString();
	}
}

export function getISODate(date?: string | Date | null): string {
	return getISODateTime(date).split("T")[0];
}

export function getLocalDateFromString(date?: string | Date) {
	const result = safeDateParse(date || new Date()).toLocaleString();
	return result.substring(0, result.length - 3);
}

export function getArrayOfYears(startAt?: number, nextYears: number = 1000) {
	const yearsArray: number[] = [];
	const startAtYear = new Date();
	if (startAt) startAtYear.setFullYear(startAt);

	for (let i = 0; i <= nextYears; i++) {
		yearsArray.push(startAtYear.getFullYear() + i);
	}

	return yearsArray;
}

/***
 * Returns an array of Date objects, by its month
 * @jumps each month spaces, example jumps = 4, result: [Jan, Jun, Oct]
 * @startAt 0 index month, for starting from specific months
 */
export function getArrayOfMonths(
	jumps: number = 1,
	startAt = 0,
	endAt = 12
): SimpleDate[] {
	const result = [];
	// let endAt_ = endAt <= 12 ? endAt : 12;
	for (let i = startAt; i < endAt; i += jumps) {
		const nextMonthDate = simpleDateFromObject({
			monthIndex: i,
		});
		nextMonthDate.setDayOfMonth(1).toZeroTime();
		result.push(nextMonthDate);
	}

	return result;
}

