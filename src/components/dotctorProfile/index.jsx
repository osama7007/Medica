import styles from "./DoctorProfile.module.css";
import Lottie from "react-lottie";
import arrow from "../../assets/images/doctor_profile/84738-arrow.json";
import { useState, useEffect } from "react";
import DoctorDefaultImg from "../../assets/images/doctor_profile/default_profile_img.png";
import CoverImg from "../../assets/images/doctor_profile/default_cover.jpg";
import {
  HiPhone,
  HiPhotograph,
  HiLocationMarker,
  HiMail,
} from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import DoctorImg from "../doctor_image";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "antd";
import DoctorForm from "../doctor-form";
import Search from "antd/lib/transfer/search";
import { useSelector } from "react-redux";
import { deSlugifyDoctor } from "../../utils/slugify";
function DoctorProfile() {
  const [doctor, setDoctor] = useState({});

  const params = useParams();
  const allDoctors = useSelector((state) => state.doctors.doctors);
  useEffect(() => {
    const doctor = allDoctors.find(
      (doctor) => doctor.name === deSlugifyDoctor(params.name)
    );
    setDoctor(doctor);
  }, [params]);

  const [image, setImage] = useState(DoctorDefaultImg); // img src will be loaded from firebase when finished

  // upload image functions
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: arrow,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const showContact = () => {
    const contact = document.getElementById("doc_contact");
    contact.className = "d-block";
  };

  return (
    <div>
      {doctor.length === 0 ? (
        <div className="container mt-5 w-50">
          <Skeleton active />
        </div>
      ) : (
        ""
      )}
      <div
        className={`${styles.profile_header} d-flex flex-column justify-content-center align-items-center position-relative`}
      >
        <div className="searchBar w-50  m-auto p-2">
          <Search />
        </div>
        <div className={`${styles.doctorImg} text-center`}>
          <div className="doctor_img_wrapper w-100 h-100  rounded-circle mb-2   position-relative ">
            <label
              class={`${styles.doctor_img_select} position-absolute`}
              title="Upload image"
            >
              <HiPhotograph className="text-dark" />
              <input
                type="file"
                onChange={onImageChange}
                className="filetype"
              />
            </label>
            <DoctorImg src={doctor?.pImage} />
          </div>
          <h3>{doctor?.name}</h3>
        </div>
      </div>
      <div
        className={`${styles.social_links} d-flex justify-content-center mb-5 mt-5`}
      >
        <ul className="d-flex p-0">
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
      <div className="biography_experience row container w-75 m-auto  mb-5">
        <div className="biography col-md-5 ms-5 ">
          <h3 className={`${styles.profile_title} mb-2 `}>
            {doctor?.experience}
          </h3>
          <p className={`${styles.biography} mb-4 `}>{doctor?.specialty}</p>
        </div>
        <div className="experience col-md-6">
          <div className={`${styles.experienceYears}`}>
            <table>
              <tr>
                <th>Experience</th>
                <th>Department</th>
                <th>Position</th>
                <th>
                  <Link to="/doctor-form">Add details</Link>
                </th>
              </tr>
              <tr>
                <td>{doctor?.experience}</td>
                <td>{doctor?.specialty}</td>
                <td>{doctor?.rate}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div
        className={`${styles.booking_examination} w-75 m-auto text-center p-2`}
      >
        <div className="booking_icons d-flex align-items-center justify-content-center">
          <div className="booking_lottie">
            <Lottie options={defaultOptions} height={100} width={100} />
          </div>
          <div className="booking_icon">
            <button
              className={`${styles.booking_button} mx-4`}
              onClick={showContact}
            >
              Booking
            </button>
          </div>
          <div id="doc_contact" className="d-none">
            <span>
              <HiPhone /> {doctor?.phone}
            </span>
            <span className="mx-4">
              <HiMail /> {doctor?.aAddress?.city}
            </span>
            <span>
              <HiLocationMarker /> {doctor?.aAddress?.street}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
