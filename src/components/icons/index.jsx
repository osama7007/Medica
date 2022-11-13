import { HiUsers } from "react-icons/hi";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import styles from './icon.module.css'

const DoctorIcons = ({ experience , rate , position }) => {
  return (
    <>
      <div className="col-lg-2 col-md-3 col-5">
        <HiUsers className={styles.icons} />
        <p className="text-blue fw-bolder mb-1">5.000+</p>
        <small className="text-black-50">Patients</small>
      </div>

      <div className="col-lg-2 col-md-3 col-5">
        <BsFillFileEarmarkBarGraphFill className={styles.icons} />
        <p className="text-blue fw-bolder mb-1">{experience}</p>
        <small className="text-black-50">Experience</small>
      </div>

      <div className="col-lg-2 col-md-3 col-5">
        <FaStarHalfAlt className={styles.icons} />
        <p className="text-blue fw-bolder mb-1">{rate}</p>
        <small className="text-black-50">Rating</small>
      </div>

      <div className="col-lg-2 col-md-3 col-5">
        <RiUserFollowFill className={styles.icons} />
        <p className="text-blue fw-bolder mb-1">{position}</p>
        <small className="text-black-50">Position</small>
      </div>
    </>
  );
};

export default DoctorIcons;
