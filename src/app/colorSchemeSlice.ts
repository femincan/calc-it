import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

const initialState: {
  value: typeof colorScheme;
} = {
  value: colorScheme,
};

export const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggle } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => state.colorScheme.value;

export default colorSchemeSlice.reducer;
