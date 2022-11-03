import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { setActiveUser } = authSlice.actions;
export const selectUser = (state) => state.authSlice.user