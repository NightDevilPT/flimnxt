import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '@/utils/api.service';
import { UpcomingMovieApiResponse } from './upcoming.interface';

export const fetchUpcomingMovies = createAsyncThunk(
  'movies/fetchUpcomingMovies',
  async (_, { rejectWithValue }) => {
    try {
      // Fetch upcoming movies from the API
      const response = await apiService.get<UpcomingMovieApiResponse>('/banner');

      if (!response || !response.results) {
        throw new Error('Invalid API response');
      }

      // Return the movie list (results)
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch upcoming movies');
    }
  }
);
