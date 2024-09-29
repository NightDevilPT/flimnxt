import { DateFormat } from "@/interfaces/date-formatter.enum";

export const formatDate = (
	dateInput: string | Date,
	format: DateFormat
): string => {
	const date = new Date(dateInput);

	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}

	const options: Intl.DateTimeFormatOptions = {};

	switch (format) {
		case DateFormat.MM_DD_YYYY:
			options.month = "2-digit";
			options.day = "2-digit";
			options.year = "numeric";
			break;
		case DateFormat.DD_MM_YYYY:
			options.day = "2-digit";
			options.month = "2-digit";
			options.year = "numeric";
			break;
		case DateFormat.MMMM_DD_YYYY:
			options.month = "long";
			options.day = "2-digit";
			options.year = "numeric";
			break;
		case DateFormat.YYYY_MM_DD:
			return date.toISOString().split("T")[0]; // ISO format for "YYYY-MM-DD"
		case DateFormat.YYYY:
			return date.getFullYear().toString(); // Return only the year as a string
		case DateFormat.FULL:
			return date.toLocaleDateString(undefined, {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		default:
			throw new Error("Unsupported format");
	}

	return new Intl.DateTimeFormat(undefined, options).format(date);
};
