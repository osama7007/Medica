import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  auth: false,
  userName: null,
  userEmail: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { setActiveUser } = authSlice.actions;
