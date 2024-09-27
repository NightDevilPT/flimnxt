import { Movie } from "@/interfaces/movie.interface";

export interface UpcomingMovieApiResponse {
	dates: {
		maximum: string; // e.g., "2024-10-23"
		minimum: string; // e.g., "2024-10-02"
	};
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}
