import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Appointment from "../../components/appointment";
import Btn from "../../components/buttons/btn";
import { deSlugify, slugify, slugifyDoctor } from "../../utils/slugify";
import style from "./allDoctors.module.css";

const DoctorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [doctors, setDoctors] = useState([]);
  const allDoctors = useSelector((state) => state.doctors.doctors);
  const specialities = [
    "All Doctors",
    ...new Set(allDoctors.map((doctor) => doctor.specialty)),
  ];

  useEffect(() => {
    if (location.search === "") {
      setDoctors(allDoctors);
    } else {
      console.log(deSlugify(location.search.split("=")[1]));
      setDoctors(
        allDoctors.filter(
          (doctor) =>
            doctor.specialty === deSlugify(location.search.split("=")[1])
        )
      );
    }
  }, [location.search, allDoctors]);

  const getSpecialty = (value) => {
    if (value !== "All Doctors") {
      navigate(`/doctors?specialty=${slugify(value)}`);
    } else {
      navigate(`/doctors`);
    }
  };
  return (
    <>
      <div className="text-center mt-5 container w-75 mb-5">
        {specialities.map((speciality, i) => (
          <Btn
            key={speciality + i + i}
            action={(e) => getSpecialty(speciality)}
            title={speciality}
          />
        ))}
      </div>
      <div className="specialty_content">
        {doctors.map((doctor) => {
          return (
            <div
              key={doctor.id}
              className=" row border m-auto shadow rounded  py-2 mb-4 w-75  d-flex justify-content-center align-items-center"
            >
              {/* <Link  */}
              <Link
                to={`/doctors/${slugifyDoctor(doctor.name)}`}
                className=" m-auto col-lg-3 col-md-12 col-sm-12 text-decoration-none"
              >
                <div className=" mb-3 w-75 ">
                  <div className="fw-bold text-decoration-none text-dark">
                    <img
                      src={doctor.pImage}
                      alt="doctor"
                      className={`w-100 rounded ${style.doctorPic}`}
                    />
                  </div>
                </div>
                <div
                  className="fw-bold  text-decoration-none text-dark"
                  key={doctor.id}
                >
                  <h4 className="fw-bold mb-3">{doctor.name}</h4>
                </div>
                <h5>
                  <span className="fw-bold fs-5">Rate:</span> {doctor.rate}/5
                </h5>
              </Link>
              <Link
                to={`/doctors/${slugifyDoctor(doctor.name)}`}
                className="m-auto col-lg-3 col-md-12  col-sm-12 text-decoration-none"
              >
                <h5 className="mb-3">
                  <span className="fw-bold fs-5">Grade: </span>
                  {doctor.graduation.grade}
                </h5>
                <h5 className="mb-3">
                  <span className="fw-bold fs-5"> Address: </span>{" "}
                  {doctor.aAddress.city}
                </h5>
                <h5 className="mb-3">
                  <span className="fw-bold fs-5"> Experience: </span>
                  {doctor.experience}
                </h5>
                <h5 className="mb-3">
                  <span className="fw-bold fs-5"> Waiting Time: </span>{" "}
                  {doctor.waiting}
                </h5>
              </Link>
              {/* </Link> */}
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
};

export default DoctorsPage;
