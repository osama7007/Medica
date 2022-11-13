import React from 'react'
import styles from "./doctorIg.module.css";
function DoctorImg({src}) {
  return (
		<>
			<img
				src={src}
				alt='preview image'
				className={`${styles.srcImg}  rounded-circle`}
			/>
		</>
	);
}

export default DoctorImg;