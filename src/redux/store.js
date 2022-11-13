import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorsSlice from "./doctorsSlice";
import articlesSlice from "./articlesSlice";
import appointmentsSlice from "./appointmentsSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    doctors: doctorsSlice.reducer,
    articles: articlesSlice,
    // appointments: appointmentsSlice,
  },
});
