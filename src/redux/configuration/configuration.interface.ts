export interface Language {
	iso_639_1: string;
	english_name: string;
	name: string;
}

export interface ImageConfiguration {
	images: ImageConfiguration
}

export type LanguagesApiResponse = Language[];

export interface ConfigurationApiResponse {
	languages: {
		[key: string]: Language;
	};
	images: ImageConfiguration
}
