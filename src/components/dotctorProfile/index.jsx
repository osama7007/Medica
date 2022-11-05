import React from "react";
import styles from "./DoctorProfile.module.css";
import Lottie from "react-lottie";
import arrow from "../../assets/images/doctor_profile/84738-arrow.json";
import { useState } from "react";
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
function DoctorProfile() {
  const [image, setImage] = useState(DoctorDefaultImg); // img src will be loaded from firebase when finished
  const [cover, setCover] = useState(CoverImg); // same ↑↑↑
  const [name, setName] = useState("Dr. My Name"); // name will load from fire base ...
  const [title, setTitle] = useState("Mansoura University Hospital ");
  const [biography, setBiography] =
    useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquamillum eos ex soluta. Voluptas, quae! Consequuntur quas ullam laborerecusandae nesciunt, voluptas ab dignissimos consectetur aperiam
						cum, impedit esse delectus incidunt quisquam. Rerum, accusamus unde
						quis rem porro numquam adipisci optio voluptatum! Impedit molestiae
						nesciunt quod, aspernatur debitis tempore!`);
  const [graduationYear, setGraduationYear] = useState("1-10-1995");
  const [degree, setDegree] = useState("Very good");
  const [institute, setInstitute] = useState("AUC");
  const [experienceYears, setExperienceYears] = useState("2019-2022");
  const [department, setDepartment] = useState("dermatologist");
  const [position, setPosition] = useState("assistant doctor");
  const [phone, setPhone] = useState("01023569854");
  const [email, setEmail] = useState("Dr.@clinic.com");
  const [address, setAddress] = useState("3-Jihan street- mansoura");
  const [doctorFacebook, setDoctorFacebook] = useState(
    "3-Jihan street- mansoura"
  );
  const [doctorTwitter, setDoctorTwitter] = useState(
    "3-Jihan street- mansoura"
  );
  const [doctorLinkedIn, setDoctorLinkedIn] = useState(
    "3-Jihan street- mansoura"
  );
  // upload image functions
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onCoverChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCover(URL.createObjectURL(event.target.files[0]));
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
      <div
        className={`${styles.profile_header} d-flex justify-content-center align-items-center position-relative`}
      >
        <label
          class={`${styles.custom_file_upload} position-absolute`}
          title="Upload image"
        >
          <HiPhotograph className="text-light" />
          <input type="file" onChange={onCoverChange} className="filetype" />
        </label>
        <img src={cover} alt="cover" className={`${styles.coverImg} w-100`} />
        <div className={`${styles.doctorImg} position-absolute text-center`}>
          <div className="doctor_img_wrapper w-100 h-100  position-relative  rounded-circle mb-2">
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
            <DoctorImg src={image} />
          </div>
          <h2>{name}</h2>
        </div>
      </div>
      <div
        className={`${styles.social_links} d-flex justify-content-center mb-5`}
      >
        <ul className="d-flex p-0">
          <li>
            <a href="#">
              {" "}
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
      <div className="biography_experience row container w-75 m-auto  mb-5">
        <div className="biography col-md-6 ">
          <h3 className={`${styles.profile_title} mb-2 `}>{title}</h3>
          <p className={`${styles.biography} mb-4 `}>{biography}</p>
        </div>
        <div className="experience col-md-6">
          <div className={`${styles.experienceYears}`}>
            <table>
              <tr>
                <th>Experience</th>
                <th>Department</th>
                <th>Position</th>
              </tr>
              <tr>
                <td>{experienceYears}</td>
                <td>{department}</td>
                <td>{position}</td>
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
              <HiPhone /> {phone}
            </span>
            <span className="mx-4">
              <HiMail /> {email}
            </span>
            <span>
              <HiLocationMarker /> {address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
