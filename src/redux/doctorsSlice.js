import { createSlice } from "@reduxjs/toolkit";

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
  },
  reducers: {
    setDoctors(state, action) {
      state.doctors = action.payload;
    },
  },
});

export const { setDoctors } = doctorsSlice.actions;

export default doctorsSlice;
