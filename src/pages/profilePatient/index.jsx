import { Table } from "antd";
import { useState } from "react";
import PatientDefaultImg from "../../assets/images/profile.webp";
import styles from "./profilePatient.module.css";
import PatientImg from "../patientImg";
import { BsFillCameraFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import "./profilePatient.module.css";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import useAuthStateHandler from "../../firebase/useAuthStateHandler";
import { doc, updateDoc } from "firebase/firestore";

const PatientProfile = () => {
  const [image, setImage] = useState('');

  const navigate = useNavigate();
  const refreshAuth = useAuthStateHandler;
  const id = useSelector((state) => state.auth.id);

  const {
    firstName,
    lastName,
    weight,
    height,
    blood,
    birthDay,
    surgeryBefore,
    geneticDiseases,
    medications,
    profileImg,
  } = useSelector((state) => state.auth);

  let birth = new Date(birthDay?.seconds).toLocaleDateString();

  const editProfileNavigate = () => {
    navigate("/patient");
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      const docRef = doc(db, "users", id);
      updateDoc(docRef, {
        profileImg: image,
      }).then(() => {
        refreshAuth();
      });
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
      info: "Height",
      result: height,
    },
    {
      key: "2",
      info: "Weight",
      result: weight,
    },
    {
      key: "3",
      info: "Blood Type",
      result: blood,
    },
    {
      key: "4",
      info: " Birthday",
      result: birth,
    },

    {
      key: "5",
      info: " Having surgery before",
      result: surgeryBefore,
    },

    {
      key: "6",
      info: " genetic diseases",
      result: geneticDiseases,
    },

    {
      key: "7",
      info: " Medications I take",
      result: medications,
    },
  ];

  return (
    <section className="container">
      <div className="d-flex align-items-end justify-content-evenly m-5">
        <div>
          <div className={`${styles.imgContainer} mb-3 position-relative`}>
            <PatientImg src={!profileImg ? PatientDefaultImg : profileImg} />

            <label
              className={`${styles.patient_img_select}  position-absolute`}
              title="Upload image"
            >
              <BsFillCameraFill className="text-blue bg-lightBlue p-2 rounded-circle fs-1" />
              <input
                type="file"
                onChange={onImageChange}
                className="filetype"
              />
            </label>
          </div>

          <h2 className="fw-bold">{` ${firstName} ${lastName}`}</h2>
        </div>

        <div>
          <PrimaryBtn title={"update profile"} action={editProfileNavigate} />
        </div>
      </div>

      <div className="w-75 mx-auto pt-5">
        <h3 className="mb-3 text-uppercase text-blue ">Your Information</h3>
        <Table
          className="shadow"
          columns={columns}
          dataSource={data}
          size="middle"
        />
      </div>
    </section>
  );
};

export default PatientProfile;
