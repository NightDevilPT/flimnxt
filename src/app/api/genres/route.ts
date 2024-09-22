import { NextResponse } from "next/server";
import apiService from "@/utils/api.service"; // Your apiService
import { env } from "@/config/env"; // Your environment variables
import { Genre } from "@/redux/genres/genres.interface";
import { genresData } from "@/redux/genres/genres.data";

export async function GET() {
	try {
		const isProduction = env.isProduction === "true";
		console.log("Fetching movie and TV genres. Production:", isProduction);

		if (isProduction) {
			console.log("Fetching genres data from TMDB API");

			const [movieGenresResponse, tvGenresResponse] = await Promise.all([
				apiService.get<{ genres: Genre[] }>(
					`${env.apiUrl}/genre/movie/list`,
					undefined,
					env.apiToken
				),
				apiService.get<{ genres: Genre[] }>(
					`${env.apiUrl}/genre/tv/list`,
					undefined,
					env.apiToken
				),
			]);
			console.log(movieGenresResponse, tvGenresResponse);

			const movieGenres = movieGenresResponse.genres.reduce<
				Record<string, Genre>
			>((acc, genre) => {
				acc[genre.id] = genre;
				return acc;
			}, {});

			const tvGenres = tvGenresResponse.genres.reduce<
				Record<string, Genre>
			>((acc, genre) => {
				acc[genre.id] = genre;
				return acc;
			}, {});

			const combinedResponse = {
				genres: {
					...movieGenres,
					...tvGenres,
				},
			};

			return NextResponse.json(combinedResponse);
		}

		return NextResponse.json(genresData);
	} catch (error) {
		console.error("Error fetching genres data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch genres data" },
			{ status: 500 }
		);
	}
}
