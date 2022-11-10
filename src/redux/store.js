import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import doctorsSlice from "./doctorsSlice";
import articlesSlice from "./articlesSlice";
export const store = configureStore({
	reducer: {
		auth: authSlice,
		doctors: doctorsSlice.reducer,
		articles: articlesSlice,
	},
});
