import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import configurationReducer from "./configuration/configuration.slice";
import genresReducer from "./genres/genres.slice";
import upcomingReducer from "./upcoming/upcoming.slice";

export const store = configureStore({
	reducer: {
		configuration: configurationReducer,
		genres: genresReducer,
		upcoming: upcomingReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;