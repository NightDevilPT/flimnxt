"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";

import Banner from "../banner";
import { useAppSelector } from "@/redux/store";
import { Movie } from "@/interfaces/movie.interface";
import { selectRandomUpcomingMovie } from "@/redux/upcoming/upcoming.selector";

const HomeBanner: React.FC = () => {
	const upcomingMovies = useAppSelector(selectRandomUpcomingMovie);
	const progressSvgRef = useRef<SVGSVGElement | null>(null); // Reference to the SVG element
	const progressContent = useRef<HTMLSpanElement | null>(null);

	const onAutoplayTimeLeft = (
		swiper: any,
		time: number,
		progress: number
	): void => {
		if (progressSvgRef.current) {
			const circle = progressSvgRef.current.querySelector("circle");
			if (circle) {
				circle.style.setProperty("--progress", `${1 - progress}`);
			}
		}
		if (progressContent.current) {
			progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
		}
	};

	return (
		<div className="w-full h-[700px] relative overflow-hidden">
			<Swiper
				spaceBetween={50}
				centeredSlides={true}
				autoplay={{
					delay: 5000, // 5 seconds delay between slides
					disableOnInteraction: false,
				}}
				effect={"cards"}
				grabCursor={true}
				speed={1500}
				loop={true}
				modules={[Autoplay, EffectCards]}
				onAutoplayTimeLeft={onAutoplayTimeLeft}
				className="mySwiper w-full h-full"
			>
				{upcomingMovies?.map((movie: Movie) => (
					<SwiperSlide key={movie.id}>
						<Banner movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HomeBanner;
