import { RootState } from "@/redux/store";

export const selectConfiguration = (state: RootState) => state.configuration;
export const selectBackdrop = (state: RootState) => state.configuration?.images?.secure_base_url;
