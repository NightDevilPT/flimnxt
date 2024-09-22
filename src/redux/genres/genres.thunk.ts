import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '@/utils/api.service';
import { GenresApiResponse } from './genres.interface';

export const fetchGenres = createAsyncThunk(
  'genres/fetchGenres',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get<GenresApiResponse>('/genres');

      if (!response || !response.genres) {
        throw new Error('Invalid API response');
      }

      // Directly return the genres object since it's structured by ID already
      return response.genres;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch genres');
    }
  }
);
