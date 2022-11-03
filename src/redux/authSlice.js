import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  userData: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userData.push(action.payload);
    },
  },
});

export const { setActiveUser } = authSlice.actions;
