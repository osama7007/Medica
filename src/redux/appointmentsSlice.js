// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   appointments: [],
//   canceled: [],
//   completed: [],
// };

// const appointmentsSlice = createSlice({
//   name: 'appointments',
//   initialState,
//   reducers: {
//     setAppointments: (state, action) => {
//       state.appointments = action.payload;
//     },
//     setCanceled: (state, action) => {
//       state.canceled = action.payload;
//     },
//     setCompleted: (state, action) => {
//       state.completed = action.payload;
//     },
//     addAppointment: (state, action) => {
//       state.appointments.push(action.payload);
//     },
//     cancelAppointment: (state, action) => {
//       const { id } = action.payload;
//       const index = state.appointments.findIndex((appointment) => appointment.id === id);
//       state.appointments.splice(index, 1);
//       state.canceled.push(action.payload);
//     },
//     completeAppointment: (state, action) => {
//       const { id } = action.payload;
//       const index = state.appointments.findIndex((appointment) => appointment.id === id);
//       state.appointments.splice(index, 1);
//       state.completed.push(action.payload);
//     },

//   }

// });

// export const { setAppointments, setCanceled, setCompleted, addAppointment, cancelAppointment, completeAppointment } = appointmentsSlice.actions;

// export default appointmentsSlice.reducer;