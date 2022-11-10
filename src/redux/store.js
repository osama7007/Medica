import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorsSlice from "./doctorsSlice";
import articlesSlice from "./articlesSlice";
import fetchApiSlice from "./fetchApiSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctors: doctorsSlice.reducer,
    articles: articlesSlice,
    fetchApi: fetchApiSlice,
  },
});
