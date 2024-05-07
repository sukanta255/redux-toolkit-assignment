import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';
import quizReducer from './store/quizSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer,
  },
});