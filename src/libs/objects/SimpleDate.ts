import { safeDateParse } from "../utils/date.utils";
import { firstLetterUpperCase } from "../utils/string.utils";

interface DateFromObjectProps {
    year?: number;
    monthIndex?: number;
    date?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    ms?: number;
}

export class SimpleDate {
    private date: Date;

    constructor(initialDate?: Date | string | null | SimpleDate) {
        this.date =
            initialDate instanceof SimpleDate
                ? safeDateParse(initialDate.b())
                : safeDateParse(initialDate);
        if (isNaN(this.date as any)) this.date = new Date();
    }

    static getDateDifference = (
        date1?: Date | string,
        date2?: Date | string
    ) => {
        const date1_ = new SimpleDate(date1).build();
        const date2_ = new SimpleDate(date2).build();
        return date1_.getTime() - date2_.getTime();
    };

    setYear = (year: number) => {
        this.date.setFullYear(year);
        return this;
    };

    setMonth = (month: number) => {
        this.date.setMonth(month);
        return this;
    };

    setHours = (hours: number) => {
        this.date.setHours(hours);
        return this;
    };

    setMinutes = (minutes: number) => {
        this.date.setMinutes(minutes);
        return this;
    };

    setSeconds = (seconds: number) => {
        this.date.setSeconds(seconds);
        return this;
    };

    setMiliseconds = (ms: number) => {
        this.date.setMilliseconds(ms);
        return this;
    };

    /***
     * Makes all time to 0, 00:00:00
     */
    toZeroTime = () => {
        return this.setSeconds(0).setHours(0).setMiliseconds(0).setMinutes(0);
    };

    setDayOfMonth = (dayOfMonth: number) => {
        this.date.setDate(dayOfMonth);
        return this;
    };

    /*** Adds dasy to current date day of month */
    addDays = (days: number) => {
        this.date.setDate(this.dayOfMonth() + days);
        return this;
    };

    /*** Adds years to current date year */
    addYears = (years: number) => {
        this.date.setFullYear(this.year() + years);
        return this;
    };

    /*** Adds months to current date month */
    addMonths = (months: number) => {
        this.date.setMonth(this.date.getMonth() + months);
        return this;
    };

    isoDateStr = () => this.date.toISOString();

    isoDateOnlyStr = () => this.date.toISOString().split("T")[0];

    utcDateStr = () => this.date.toUTCString();

    dayOfMonth = () => this.date.getDate();

    dayOfWeek = () => this.date.getDay();

    year = () => this.date.getFullYear();

    time = () => this.date.getTime();

    month = () => (this.date.getMonth() ?? 0) + 1;

    localeDateStr = (
        locale?: Intl.LocalesArgument,
        options?: Intl.DateTimeFormatOptions
    ) => this.date.toLocaleDateString(locale, options);

    localeStr = () => this.date.toLocaleString();

    localeTimeStr = () => this.date.toLocaleTimeString();

    monthName = (locale: string) =>
        firstLetterUpperCase(
            this.date.toLocaleDateString(locale, { month: "long" })
        );

    /*** @build and @b does exactly the same */
    build = () => this.date;
    b = () => this.date;

    static isValidDateString = (dateString: string): boolean => {
        const date = new Date(dateString);
        try {
            date.toISOString();
            return true;
        } catch (error) {
            return false;
        }
    };

    static dateFromObject = (dateProps: DateFromObjectProps = {}) => {
        const defaultValues = new Date();

        const date = new Date(
            dateProps?.year ?? defaultValues.getFullYear(),
            dateProps?.monthIndex ?? defaultValues.getMonth(),
            dateProps?.date ?? defaultValues.getDate(),
            dateProps?.hours ?? defaultValues.getHours(),
            dateProps?.minutes ?? defaultValues.getMinutes(),
            dateProps?.seconds ?? defaultValues.getSeconds(),
            dateProps?.ms ?? defaultValues.getMilliseconds()
        );

        return new SimpleDate(date);
    };
}

export const simpleDate = (date?: string | Date | null | SimpleDate) =>
    new SimpleDate(date);
export const simpleDateFromObject = (dateFromObject?: DateFromObjectProps) =>
    SimpleDate.dateFromObject(dateFromObject);
