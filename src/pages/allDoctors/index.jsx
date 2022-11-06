import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Appointment from "../../components/appointment";
import Btn from "../../components/buttons/btn";
import style from "./allDoctors.module.css";

function AllDoctors() {
  const navigate = useNavigate();
  const [topDoctor, setTopDoctor] = useState([]);
  const [btnVal, setBtnVal] = useState("");

  const docProfileNavigate = () => {
    navigate("/patient");
  };

  window.addEventListener("load", () => {
    allDoctorsView();
  });

  let getSpecialty = (e) => {
    setBtnVal(e.target.innerHTML);
    getDoctor();
  };

  let getAllDoctors = () => {
    allDoctorsView();
  };

  const allDoctorsView = () => {
    fetch(`https://doctor4.herokuapp.com/all`)
      .then((res) => res.json())
      .then((json) => setTopDoctor(json));
  };

  const getDoctor = () => {
    fetch(`https://doctor4.herokuapp.com/${btnVal}`)
      .then((res) => res.json())
      .then((json) => setTopDoctor(json));
  };

  return (
    <>
      <div className="text-center mt-5 container w-75 mb-5">
        <Btn action={(e) => getAllDoctors(e)} title="All doctors" />
        <Btn action={(e) => getSpecialty(e)} title="Dermatology" />
        <Btn action={(e) => getSpecialty(e)} title="Pulmonologist" />
        <Btn action={(e) => getSpecialty(e)} title="Otolaryngology" />
        <Btn action={(e) => getSpecialty(e)} title="Pediatrics" />
        <Btn action={(e) => getSpecialty(e)} title="InternalMedicine" />
        <Btn action={(e) => getSpecialty(e)} title="Psychiatry" />
        <Btn action={(e) => getSpecialty(e)} title="PlasticSurgery" />
        <Btn title="More" />
      </div>
      <div className="specialty_content">
        {topDoctor.map((doctor) => {
          return (
            <div className="   row border m-auto shadow rounded  py-2 mb-4 w-75  d-flex justify-content-center align-items-center">
              <div className=" m-auto col-lg-3 col-md-12 col-sm-12  ">
                <div className=" mb-3 w-75 ">
                  <Link
                    className="fw-bold text-decoration-none text-dark"
                    to={`/doctor-profile/${doctor.id}`}
                    key={doctor.id}
                  >
                    <img
                      src={doctor.pImage}
                      alt="doctor"
                      className={`w-100 rounded ${style.doctorPic}`}
                    />
                  </Link>
                </div>
                <Link
                  className="fw-bold  text-decoration-none text-dark"
                  to={`/doctor-profile/${doctor.id}`}
                  key={doctor.id}
                >
                  <h4 className="fw-bold mb-3" action={docProfileNavigate}>
                    {doctor.name}
                  </h4>
                </Link>
                <h5>
                  <span className="fw-bold fs-5">Rate:</span> {doctor.rate}/5
                </h5>
              </div>
              <div className="   m-auto   col-lg-3 col-md-12  col-sm-12  ">
                <h5 className="mb-3">
                  <span className="fw-bold fs-5">Grade: </span>
                  {doctor.graduation.grade}
                </h5>
                <h5 className="mb-3">
                  <span className="fw-bold fs-5"> Address:</span>{" "}
                  {doctor.aAddress.city}
                </h5>
                <h5 className="mb-3">
                  <span className="fw-bold fs-5"> Experience: </span>
                  {doctor.experience}
                </h5>
                <h5 className="mb-3">
                  <span className="fw-bold fs-5"> Waiting Time:</span>{" "}
                  {doctor.waiting}
                </h5>
              </div>
              <div className=" col-lg-3 col-md-12  m-auto  col-sm-12">
                <Appointment />
                <span>
                  <small className="appointment">Appointment reservation</small>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllDoctors;
