import React from "react";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import rateGif from "../../assets/images/lf30_editor_eivhekn3.json";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import styles from './topRated.module.css'
function TopRated() {
  const [topRated, seTopRated] = useState([]);

  useEffect(() => {
    getDoctor();
  }, []);
  

  const getDoctor = () => {
    fetch("https://doctor4.herokuapp.com/all")
      .then((res) => res.json())
      .then((json) => seTopRated(json));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rateGif,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="  d-flex flex-column justify-content-center align-items-center mt-4 ">
      <h2 className="text-center fw-bold mt-4 mb-3  text-decoration-underline text-primary ">
        TOP DOCTORS
      </h2>
      <div className="booking_lottie mb-4">
        <Lottie options={defaultOptions} height={50} width={300} />
      </div>
      {topRated.map((doctor) => {
        if (doctor.rate > 3) {
          return (
            <>
              <div className={`border shadow rounded px-3 py-3 mb-4 d-flex justify-content-center align-items-center ${styles.doctorCard}`}>
                <div className="w-50 ms-2">
                  <div className={`w-75 h-75 mb-3 ${styles.doctorPic}`}>
                    <img
                      src={doctor.pImage}
                      alt="doctor"
                      className="w-75 rounded"
                    />
                  </div>
                  <h4 className="fw-bold">{doctor.name}</h4>
                  <h5>
                    <span className="fw-bold fs-5">Rate: </span> {doctor.rate}/5
                  </h5>
                  <h5>
                    <span className="fw-bold fs-5">Grade: </span>
                    {doctor.graduation.grade}
                  </h5>
                </div>
                <div className="w-50  mt-2 ">
                  <h5 className="mb-4">
                    <span className="fw-bold fs-5"> Specialty: </span>
                    {doctor.specialty}
                  </h5>
                  <h5 className="mb-4">
                    <span className="fw-bold fs-5"> Address: </span>
                    {doctor.aAddress.city}
                  </h5>
                  <h5 className="mb-4">
                    <span className="fw-bold fs-5"> Experience: </span>
                    {doctor.experience}
                  </h5>
                  <h5 className="mb-4">
                    <span className="fw-bold fs-5"> Waiting Time: </span>
                    {doctor.waiting}
                  </h5>
                  <Link
                    className="fw-bold text-uppercase"
                    to={`/doctor-profile/${doctor.name}`}
                    key={doctor.name}
                  >
                    <SecondaryBtn title=" View Profile" />
                  </Link>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}

export default TopRated;
