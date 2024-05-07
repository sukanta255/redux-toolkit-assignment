import { createSlice } from '@reduxjs/toolkit';

export const footballMatchesSlice = createSlice({
  name: 'footballMatches',
  initialState: {
    matches: [],
  },
  reducers: {
    setMatches: (state, action) => {
      state.matches = action.payload;
    },
  },
});

export const { setMatches } = footballMatchesSlice.actions;

export const selectMatches = (state) => state.footballMatches.matches;

export default footballMatchesSlice.reducer;
