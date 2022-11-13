import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDoctors } from "../redux/doctorsSlice";

const useDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) {
      fetch("https://doctor4.herokuapp.com/all")
        .then((res) => res.json())
        .then((json) => setAllDoctors(json));
    }
  }, []);

  useEffect(() => {
    if (allDoctors.length > 0) {
      dispatch(setDoctors([...allDoctors]));
    }
  }, [allDoctors]);
};

export default useDoctors;
