import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi' }),
  endpoints: (builder) => ({
    getQuiz: builder.query({
      query: () => '/get-quiz',
    }),
  }),
});

export const { useGetQuizQuery } = quizApi;