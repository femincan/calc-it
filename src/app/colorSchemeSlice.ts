import { createSlice } from '@reduxjs/toolkit';
import { ColorScheme } from '@mantine/core';
import type { RootState } from './store';

const colorScheme: ColorScheme = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches
  ? 'dark'
  : 'light';

const initialState = {
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
