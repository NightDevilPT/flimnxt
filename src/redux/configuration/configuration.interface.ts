export interface Language {
	iso_639_1: string;
	english_name: string;
	name: string;
}

export interface ImagesConfig {
	base_url: string;
	secure_base_url: string;
	backdrop_sizes: ImageSize[];
	logo_sizes: ImageSize[];
	poster_sizes: ImageSize[];
	profile_sizes: ImageSize[];
	still_sizes: ImageSize[];
}

export type ImageSize =
	| "w45"
	| "w92"
	| "w154"
	| "w185"
	| "w300"
	| "w342"
	| "w500"
	| "w780"
	| "w1280"
	| "h632"
	| "original";

export type LanguagesApiResponse = Language[];

export interface ConfigurationApiResponse {
	languages: {
		[key: string]: Language;
	};
	images: ImagesConfig;
}
