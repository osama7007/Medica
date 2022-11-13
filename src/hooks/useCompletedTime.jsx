import { doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase";

const useCompeltedTime = (time) => {
  const auth = useSelector((state) => state.auth);
  const { id = "", appointments = [] } = auth;
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  useEffect(() => {
    if (auth.isAuth) {
      appointments.map((appointment, index) => {
        const date = appointment.date.split("/");
        const day = parseInt(date[0]);
        const month = parseInt(date[1]);
        const year = parseInt(date[2]);
        const hour = parseInt(appointment.time.split(":")[0]);
        if (
          year <= currentYear &&
          month <= currentMonth + 1 &&
          day <= currentDay
        ) {
          const compAppointment = appointment;
          console.log(compAppointment);
          const docRef = doc(db, "users", id);
          const newAppointments = appointments.filter((_, i) => i !== index);
          console.log("newAppointments", newAppointments);
          updateDoc(docRef, {
            appointments: newAppointments,
          });
          updateDoc(docRef, {
            compeleted:
              auth?.compeleted?.length > 0
                ? [...auth?.compeleted, compAppointment]
                : [compAppointment],
          });
        }
      });
    }
  }, []);
};

export default useCompeltedTime;
