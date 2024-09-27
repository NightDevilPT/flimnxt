import { NextResponse } from "next/server";
import apiService from "@/utils/api.service"; // Your apiService
import { env } from "@/config/env"; // Your environment variables
import {
	LanguagesApiResponse,
	ConfigurationApiResponse,
	Language,
	ImageConfiguration,
} from "@/redux/configuration/configuration.interface";
import { configurationData } from "@/redux/configuration/configuration.data";

export async function GET() {
	try {
		const isProduction = env.isProduction === "true";
		console.log("Fetching configuration data. Production:", isProduction);

		if (isProduction) {
			console.log("Fetching configuration data from API");

			const [languagesResponse,imageResponse] = await Promise.all([
				apiService.get<LanguagesApiResponse>(
					`${env.apiUrl}/configuration/languages`,
					undefined,
					env.apiToken
				),
				apiService.get<ImageConfiguration>(
					`${env.apiUrl}/configuration`,
					undefined,
					env.apiToken
				),
			]);

			const transformedLanguages = languagesResponse.reduce<
				Record<string, Language>
			>((acc, language) => {
				if (language.name.length > 0) {
					acc[language.english_name] = language;
				}
				return acc;
			}, {});

			const combinedResponse: ConfigurationApiResponse = {
				languages: transformedLanguages,
				images: imageResponse.images,
			};

			return NextResponse.json(combinedResponse);
		}

		console.log("Fetching configuration data from cache");
		return NextResponse.json(configurationData);
	} catch (error) {
		console.error("Error fetching configuration data:", error);
		return NextResponse.json(
			{ error: "Failed to fetch configuration data" },
			{ status: 500 }
		);
	}
}
