import { NextResponse } from "next/server";
import apiService from "@/utils/api.service"; // Your apiService
import { env } from "@/config/env"; // Your environment variables
import { UpcomingMovieApiResponse } from "@/redux/upcoming/upcoming.interface";
import { upcomingMoviesData } from "@/redux/upcoming/upcoming.data";

export async function GET() {
	try {
		const isProduction = env.isProduction === "true";
		if (isProduction) {
			console.log("Fetching upcoming movies. Production:", isProduction);

			const upcomingMoviesResponse = await apiService.get<UpcomingMovieApiResponse>(
				`${env.apiUrl}/movie/upcoming`,
				undefined,
				env.apiToken
			);
	
			// Validate the response using the interface
			if (upcomingMoviesResponse) {
				return NextResponse.json(upcomingMoviesResponse);
			}
	
			// Handle the case where no data is returned
			throw new Error("No upcoming movies found");
		}

		return NextResponse.json(upcomingMoviesData)
	} catch (error) {
		console.error("Error fetching upcoming movies:", error);
		return NextResponse.json(
			{ error: "Failed to fetch upcoming movies" },
			{ status: 500 }
		);
	}
}
