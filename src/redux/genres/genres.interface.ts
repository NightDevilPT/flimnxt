export interface Genre {
	id: number;
	name: string;
}

export interface GenresApiResponse {
	genres: {
		[key: string]: Genre;
	};
}
