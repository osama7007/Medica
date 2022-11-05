import { createSlice } from '@reduxjs/toolkit';

let fetchApiSlice = createSlice({
	name: 'fetchApi',
	initialState: {
		doctors: [],
		doctor: {},
	},
	reducers: {
		fetchAllDoctors: (state, action) => {
			fetch(action.payload)
				.then((res) => res.json())
				.then((data) => (state.doctors = data));
		},
	},
});
export const { setDoctor } = fetchApiSlice.actions;
export default fetchApiSlice.reducer