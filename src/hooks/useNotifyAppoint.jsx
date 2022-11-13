import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setNotified } from "../redux/authSlice";

const useNotifyAppoint = () => {
  const appointments = useSelector((state) => state.auth?.appointments) || [];
  const doctors = useSelector((state) => state.doctors?.doctors) || [];
  const notified = useSelector((state) => state.auth.notified);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (auth.isAuth &&   doctors.length > 0 && !notified) {
    appointments.map((appointment, index) => {
      if (index < 3) {
        toast.info(
          `Appointment at ${appointment.time} with ${
            doctors.find((doctor) => doctor?.id === appointment?.doctorId)?.name
          } is coming`,
          {
            autoClose: 5000,
            position: "top-right",
          }
        );
      }
    });

    dispatch(setNotified());
  }
};
export default useNotifyAppoint;
