import styles from "./DoctorProfile.module.css";
import { useState, useEffect } from "react";
import { HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaStreetView } from "react-icons/fa";
import Heading from "../heading";
import DoctorImg from "../doctor_image";
import DoctorIcons from "../icons";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "antd";
import axios from "axios";
import PrimaryBtn from "../buttons/PrimaryBtn";
import { useSelector } from "react-redux";
import { deSlugifyDoctor } from "../../utils/slugify";

function DoctorProfile() {
  const [doctor, setDoctor] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  const allDoctors = useSelector((state) => state.doctors.doctors);
  useEffect(() => {
    const doctor = allDoctors.find(
      (doctor) => doctor.name === deSlugifyDoctor(params.name)
    );
    setDoctor(doctor);
  }, [params]);

  const navigateappontment = () => {
    navigate("/appointment");
  };

  return (
    <section className="py-4 container">
      {!doctor?.name && (
        <div className="container mt-5 w-50">
          <Skeleton active />
        </div>
      )}

      {doctor?.name && (
        <>
          <div
            className=" d-flex align-items-center flex-xl-row flex-lg-row flex-md-row flex-column  justify-content-center gap-3
             mb-3"
          >
            <div className={`${styles.doctorImg} text-center mb-4 `}>
              <div className="doctor_img_wrapper w-100 h-100  rounded-circle  ">
                <DoctorImg src={doctor?.pImage} />
              </div>
            </div>
            <div className="ps-3">
              <h2>{doctor?.name}</h2>
              <p className={`${styles.specialty} text-center`}>
                {doctor?.specialty}
              </p>
            </div>
          </div>

          <div className=" d-flex m-auto row justify-content-center gap-2 mb-5 align-items-center  text-center">
            <DoctorIcons
              experience={doctor?.experience}
              rate={doctor?.rate}
              position={doctor?.position}
            />
          </div>

          <div className="d-flex row flex-lg-row flex-md-row flex-column m-auto  container justify-content-around gap-3  align-items-center">
            <div className="col-lg-5 col-md-5 col-12 shadow-sm p-4 rounded-4 m-auto">
              <Heading text="about me" />
              <p className="pt-3">
                <span className="text-blue fw-bold me-1"> {doctor?.name} </span>
                is the top most
                <span className="text-blue fw-bold mx-1">
                  {doctor?.specialty}
                </span>
                specialist in Christ Hospital at
                <span className="text-blue fw-bold mx-1">
                  {doctor?.aAddress.government}
                </span>
                , graduated in
                <span className="text-blue fw-bold mx-1">
                  {doctor?.graduation.year}
                </span>
                from
                <span className="text-blue fw-bold mx-1">
                  {doctor?.graduation.university}
                </span>
                with
                <span className="text-blue fw-bold mx-1">
                  {doctor?.graduation.grade}
                </span>
                Grade , Achieved several awards for the wonderful contribution
                in medical fields.
              </p>
            </div>

            <div className="col-lg-5 col-md-5 col-12 shadow-sm p-4 rounded-4 m-auto">
              <Heading text="contact info" />
              <div className="d-flex flex-lg-row m-auto flex-md-column align-items-center justify-content-between px-4 pt-3 text-center">
                <div>
                  <HiPhone className="text-blue fw-bold fs-2 mb-3" />
                  <p className="fw-bold">{doctor?.phone}</p>
                </div>

                <div>
                  <HiLocationMarker className="text-blue fw-bold fs-2 mb-3" />
                  <p className="fw-bold">{doctor?.aAddress.city}</p>
                </div>

                <div>
                  <FaStreetView className="text-blue fw-bold fs-2 mb-3" />
                  <p className="fw-bold">{doctor?.aAddress.street}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center my-5">
            <PrimaryBtn title="book appointment" action={navigateappontment} />
          </div>
        </>
      )}
    </section>
  );
}

export default DoctorProfile;
