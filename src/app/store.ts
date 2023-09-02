import { configureStore } from '@reduxjs/toolkit';
import colorSchemeReducer from './colorSchemeSlice';
import calculatorReducer from './calculatorSlice';

const store = configureStore({
  reducer: {
    colorScheme: colorSchemeReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
