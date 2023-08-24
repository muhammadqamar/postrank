/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userAccountDetails: null,
};

export const assembly = createSlice({
  name: 'assembly',
  initialState,
  reducers: {
    setUserAccountDetails: (state, action) => {
      state.userAccountDetails = action.payload;
    },
  },
});

export const { setUserAccountDetails } = assembly.actions;

export default assembly.reducer;
