export interface Language {
	iso_639_1: string;
	english_name: string;
	name: string;
}

export type LanguagesApiResponse = Language[];

export interface ConfigurationApiResponse {
	languages: {
		[key: string]: Language;
	};
}
