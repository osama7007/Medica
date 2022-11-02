import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDoctors } from "../redux/doctorsSlice";

const useDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://doctor4.herokuapp.com/all")
      .then((res) => res.json())
      .then((json) => setAllDoctors(json));
  }, []);

  useEffect(() => {
    if (allDoctors.length > 0) {
      dispatch(setDoctors([...allDoctors]));
    }
  }, [allDoctors]);
};

export default useDoctors;
