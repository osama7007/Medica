import React from "react";
import styles from "./patientlg.module.css";
function PatientImg({ src }) {
  return (
    <>
      <img
        src={src}
        alt="preview image"
        className={`${styles.srcImg} w-50 mb-3  rounded-circle`}
      />
    </>
  );
}

export default PatientImg;
