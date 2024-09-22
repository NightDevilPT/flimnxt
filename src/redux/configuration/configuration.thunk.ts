import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '@/utils/api.service';
import { ConfigurationApiResponse } from '@/redux/configuration/configuration.interface';

export const fetchConfiguration = createAsyncThunk(
  'configuration/fetchConfiguration',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiService.get<ConfigurationApiResponse>('/configuration');
      
      if (!response || !response.languages) {
        throw new Error('Invalid API response');
      }
      
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch configuration');
    }
  }
);
