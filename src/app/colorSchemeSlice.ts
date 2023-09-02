import { createSlice } from '@reduxjs/toolkit';
import { ColorScheme } from '@mantine/core';
import type { RootState } from './store';

let colorScheme: ColorScheme;

const localColorScheme = localStorage.getItem('colorScheme');

if (localColorScheme === 'dark' || localColorScheme === 'light') {
  colorScheme = localColorScheme;
} else {
  colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  localStorage.setItem('colorScheme', colorScheme);
}

const initialState = {
  value: colorScheme,
};

export const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'dark' ? 'light' : 'dark';
      localStorage.setItem('colorScheme', state.value);
    },
  },
});

export const { toggle } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => state.colorScheme.value;

export default colorSchemeSlice.reducer;
