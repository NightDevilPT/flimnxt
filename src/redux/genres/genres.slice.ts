import { createSlice } from '@reduxjs/toolkit';
import { Genre } from './genres.interface';
import { fetchGenres } from './genres.thunk';

interface GenresState {
  genres: Record<string, Genre>;
  loading: boolean;
  error: string | null;
}

const initialState: GenresState = {
  genres: {},
  loading: false,
  error: null,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.genres = {};
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload; // Store the fetched genres directly
        state.error = null;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.genres = {};
      });
  },
});

export default genresSlice.reducer;
