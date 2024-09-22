import { createSlice } from '@reduxjs/toolkit';
import { Language } from '@/redux/configuration/configuration.interface';
import { fetchConfiguration } from './configuration.thunk';

interface ConfigurationState {
  languages: Record<string, Language>;
  loading: boolean;
  error: string | null;
}

const initialState: ConfigurationState = {
  languages: {},
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
      })
      .addCase(fetchConfiguration.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload.languages;
        state.error = null;
      })
      .addCase(fetchConfiguration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch configuration data';
        state.languages = {};
      });
  },
});

export default configurationSlice.reducer;
