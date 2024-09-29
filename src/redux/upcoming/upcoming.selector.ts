import { RootState } from "../store";
import { Genre } from "../genres/genres.interface";
import { Movie } from "@/interfaces/movie.interface";

export const selectRandomUpcomingMovie = (state: RootState) => {
	const result = state.upcoming.upcoming?.results;
	const secure_base_url = state.configuration.images?.secure_base_url;
	const length = result?.length;
	const min = 0;
	const max = 10;

	if (!result || !length || !secure_base_url) {
		return null;
	}

	return result.slice(min, max).map((items: Movie) => ({
		...items,
		backdrop_path: secure_base_url + items.backdrop_path,
		poster_path: secure_base_url + items.poster_path,
		genre_ids:items.genre_ids.map((ids:Genre | number)=>{
			if(typeof ids === 'number'){
				return state.genres.genres[ids]
			}
			return ids
		})
	}));
};
