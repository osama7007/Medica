import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase/firebase";
import {
  setAppointments,
  setCanceled,
  setCompleted,
} from "../redux/appointmentsSlice";

const useAppointments = () => {
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();

  const userRef = doc(db, "appointments", userId);
  let appointments = [];
  onSnapshot(userRef, (doc) => {
    if (doc.exists()) {
      const data = doc.data();
      appointments.push(data);
    }
  });
  dispatch(setAppointments(appointments));
  

  // getDocs(collection(db, "users", userId, "canceled")).then((querySnapshot) => {
  //   const canceled = [];
  //   querySnapshot.forEach((doc) => {
  //     canceled.push(doc.data());
  //   });
  //   dispatch(setCanceled(canceled));
  // });
  // getDocs(collection(db, "users", userId, "completed")).then(
  //   (querySnapshot) => {
  //     const completed = [];
  //     querySnapshot.forEach((doc) => {
  //       completed.push(doc.data());
  //     });
  //     dispatch(setCompleted(completed));
  //   }
  // );
};

export default useAppointments;
