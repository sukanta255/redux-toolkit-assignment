import { createSlice } from '@reduxjs/toolkit';
import { useGetQuizQuery } from '../api/quizApi';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
  isLoading: false,
  error: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer(state, action) {
      const { answer } = action.payload;
      state.userAnswers.push(answer);
      state.currentQuestionIndex++;
    },
    skipQuestion(state) {
