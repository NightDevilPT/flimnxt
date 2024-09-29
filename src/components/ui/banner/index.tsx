import React from "react";
import GenresChips from "../chips";
import { Image } from "@nextui-org/react";
import { Movie } from "@/interfaces/movie.interface";
import { formatDate } from "@/utils/date-formatter";
import { Genre } from "@/redux/genres/genres.interface";
import { DateFormat } from "@/interfaces/date-formatter.enum";


const Banner = ({ movie }: { movie: Movie }) => {
	return (
		<div className="w-full h-full">
			<Image
				src={`${movie.backdrop_path}`}
				alt={movie.title}
				radius="none"
				className="aspect-video"
				classNames={{
					wrapper: "w-screen h-full overflow-hidden",
					img: "w-screen h-full object-cover",
				}}
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background via-background/40 to-background z-10 grid grid-cols-3 gap-5 flex-col px-5">
				<div className="w-full h-auto max-xl:hidden flex justify-center items-center">
					<Image
						src={`${movie.poster_path}`}
						alt={movie.title}
						radius="md"
						classNames={{
							wrapper: "w-3/4 h-auto overflow-hidden",
							img: "w-screen h-auto object-cover",
						}}
					/>
				</div>
				<div className="col-span-2 max-xl:col-span-full w-full flex flex-col gap-1 justify-center">
					<div className="w-full">
						<h1 className={`text-3xl font-bold`}>
							{movie.title} (
							{formatDate(movie.release_date, DateFormat.YYYY)})
						</h1>
					</div>
					<span className="text-md text-default-600 w-full line-clamp-3 max-xl:line-clamp-5">
						{movie.overview}
					</span>
					<div className="w-full flex-wrap flex justify-start gap-2 items-center">
						{movie?.genre_ids?.map((items: Genre | number) => {
							if (typeof items !== "number") {
								return (
									<GenresChips key={items?.id} items={items} />
								);
							}
							return items;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
