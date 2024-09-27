import { createSlice } from '@reduxjs/toolkit';
import { ImageConfiguration, Language } from '@/redux/configuration/configuration.interface';
import { fetchConfiguration } from './configuration.thunk';

interface ConfigurationState {
  languages: Record<string, Language>;
  images: ImageConfiguration | null;
  loading: boolean;
  error: string | null;
}

const initialState: ConfigurationState = {
  languages: {},
  images: null,
  loading: false,
  error: null,
};

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfiguration.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.languages = {};
        state.images = null;
      })
      .addCase(fetchConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload.languages;
        state.images = action.payload.images;
        state.error = null;
      })
      .addCase(fetchConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch configuration data';
        state.languages = {};
        state.images = null;
      });
  },
});

export default configurationSlice.reducer;
