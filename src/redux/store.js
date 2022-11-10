import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import doctorsSlice from "./doctorsSlice";
import articlesSlice from "./articlesSlice";
export const store = configureStore({
	reducer: {
		authSlice: authSlice.reducer,
		doctors: doctorsSlice.reducer,
		articles: articlesSlice,
	},
});
