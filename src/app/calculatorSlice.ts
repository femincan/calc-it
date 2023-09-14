import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = {
  currentValue: '0',
  pastValue: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    changeCalculation: (
      state,
      action: PayloadAction<{ calculation: string; isResult?: boolean }>,
    ) => {
      if (action.payload.isResult) {
        state.pastValue = state.currentValue;
      }

      if (action.payload.calculation.length <= 19) {
        if (action.payload.calculation === '') {
          state.currentValue = initialState.currentValue;
        } else {
          state.currentValue = action.payload.calculation;
        }
      }
    },
    resetPastCalculation: (state) => {
      state.pastValue = initialState.pastValue;
    },
  },
});

export const { changeCalculation, resetPastCalculation } =
  calculatorSlice.actions;

export const selectCalculation = (state: RootState) => state.calculator;

export default calculatorSlice.reducer;
