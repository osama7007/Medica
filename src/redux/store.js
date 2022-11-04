import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./articlesSlice";
import { authSlice } from "./authSlice";
import doctorsSlice from "./doctorsSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    doctors: doctorsSlice.reducer,
    articles: articlesSlice,
  },
});
