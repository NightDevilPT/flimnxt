import { Genre } from "@/redux/genres/genres.interface";

export interface Movie {
	adult: boolean;
	backdrop_path: string | null; // e.g., "/9oYdz5gDoIl8h67e3ccv3OHtmm2.jpg"
	genre_ids: number[] | Genre[]; // e.g., [18, 27, 878]
	id: number;
	original_language: string; // e.g., "en"
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null; // e.g., "/zQc1PITqFxZDbEmHlQgO5Mxc4Od.jpg"
	release_date: string; // e.g., "2024-09-07"
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
