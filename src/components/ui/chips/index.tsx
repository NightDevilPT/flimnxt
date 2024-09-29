import React from "react";
import { Genre } from "@/redux/genres/genres.interface";

export interface GenresChipsProps {
	items: Genre;
}

const GenresChips = ({ items }: GenresChipsProps) => {
	return (
		<span className="text-xs px-3 py-1 cursor-pointer rounded bg-pink-500 text-white">
			{items?.name}
		</span>
	);
};

export default GenresChips;
