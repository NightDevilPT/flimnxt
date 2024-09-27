import { Movie } from '@/interfaces/movie.interface';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUpcomingMovies } from './upcoming.thunk';
import { UpcomingMovieApiResponse } from './upcoming.interface';

interface UpcomingMoviesState {
  upcoming: UpcomingMovieApiResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: UpcomingMoviesState = {
  upcoming: null,
  loading: false,
  error: null,
};

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.upcoming = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.upcoming = action.payload; // Store the fetched upcoming upcoming
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.upcoming = null;
      });
  },
});

export default upcomingMoviesSlice.reducer;
