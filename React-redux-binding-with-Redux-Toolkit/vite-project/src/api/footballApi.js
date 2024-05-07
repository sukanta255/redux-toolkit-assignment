import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonmock.hackerrank.com/api/' }),
  endpoints: (builder) => ({
    getFootballMatches: builder.query({
      query: (page) => `football_matches?page=${page}`,
    }),
  }),
});

export const { useGetFootballMatchesQuery } = footballApi;
