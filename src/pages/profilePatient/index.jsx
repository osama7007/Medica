import { Table } from "antd";
import { useState } from "react";
import PatientDefaultImg from "../../assets/images/profile.webp";
import CoverImgPatient from "../../assets/images/1457c19c1cb8225.jpg";
import styles from "./profilePatient.module.css";
import PatientImg from "../patientImg";
import { HiPhotograph } from "react-icons/hi";
import patientIcon from "../../assets/images/patienticon.png";
import { useNavigate } from "react-router-dom";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import "./profilePatient.module.css";
const PatientProfile = () => {
  const [image, setImage] = useState(PatientDefaultImg); // img src will be loaded from firebase when finished
  // const [cover, setCover] = useState(CoverImgPatient); // same ↑↑↑
  const [name, setName] = useState("Patient Name"); // name will load from fire base ...
  const navigate = useNavigate();

  const editProfileNavigate = () => {
    navigate("/patient");
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const columns = [
    {
      title: "info",
      dataIndex: "info",
    },
    {
      title: "result",
      dataIndex: "result",
    },
  ];
  const data = [
    {
      key: "1",
      info: " Height",
      result: "166 cm",
    },
    {
      key: "2",
      info: " Weight",
      result: "60 kg",
    },
    {
      key: "3",
      info: " Blood Type",
      result: "O",
    },
    {
      key: "4",
      info: " Birthday",
      result: "17/7/1997",
    },
  ];

  return (
    <div className="w-75 container  mx-auto mt-5">
      <div>
        <div className={`${styles.profile_header}   `}>
          {/* <img
            src={cover}
            alt="cover"
            className={`${styles.CoverImgPatient} w-100`}
          /> */}
          <div className={`${styles.PatientImg} mt-5  text-center`}>
            <div className="   position-relative   rounded-circle ">
              <label
                class={`${styles.patient_img_select}   position-absolute`}
                title="Upload image"
              >
                <HiPhotograph className="text-dark" />
                <input
                  type="file"
                  onChange={onImageChange}
                  className="filetype "
                />
              </label>
              <PatientImg className="mt-3  " src={image} />
            </div>
          </div>
          <div>
            <div className="container-fluid  d-flex justify-content-between   ">
              <div className="d-flex container   ms-5">
                <h2 className="fw-bold mt-5 me-2  patientName ">{name}</h2>
                <button className="btn mt-5  btn-primary me-2">
                  Following
                </button>
              </div>
              <div className="mt-5">
                <SecondaryBtn title={"Edit"} action={editProfileNavigate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container gap-3   ">
        <div className="  mb-5 mx-5 d-flex gap-4 justify-content-center align-items-center">
          <div className="w-75 col-8">
            <h3 className="mb-3 information text-primary ">
              Your Information ...
            </h3>
            <Table
              className="shadow  "
              columns={columns}
              dataSource={data}
              size="middle"
            />
          </div>
          <div className="w-25 col-4">
            <img className="w-100" src={patientIcon}></img>
          </div>
        </div>
        <h3 className="mb-3 ms-5 text-primary ">
          Important Questions'answers ...
        </h3>
        <div className="w-75 shadow container px-4  mx-5 pb-2 ">
          <h5 className="mb-4 pt-3">(yes,no) </h5>
          <h5 className="mb-4"> My genetic diseases are </h5>
          <h5 className="mb-4"> I take </h5>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
