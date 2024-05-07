import { createSlice } from '@reduxjs/toolkit';
import { useLoginMutation } from '../api/authApi';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(useLoginMutation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(useLoginMutation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addMatcher(useLoginMutation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;