import { configureStore } from '@reduxjs/toolkit';
import footballMatchesReducer from '../features/footballMatches/footballMatchesSlice';

export const store = configureStore({
  reducer: {
    footballMatches: footballMatchesReducer,
  },
});
