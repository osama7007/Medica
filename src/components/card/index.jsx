import styles from "./card.module.css";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import BlueBtn from "../buttons/blueBtn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ img, title, rate, position, experince, specialty }) => {
  const navigate = useNavigate();
  const navigateappontment = () => {
    navigate('/appoinment');
  };

  return (
    <motion.div
      layout
      className={`${styles.cardContainer} m-auto shadow rounded-4 mb-5 py-5 px-3`}
    >
      <div>
        <div className={`${styles.imgContainer} mb-2 m-auto`}>
          <img src={img} alt={title} className=" rounded-4" />
        </div>

        <p className="fw-bold fs-5 mb-1 text-center">{title}</p>
        <p className="text-center text-uppercase text-blue bg-lightBlue p-2">
          {specialty}
        </p>
      </div> 

      <div className="ms-2">
        <div className="d-flex align-items-center justify-content-around text-center gap-5 mb-4">
          <div>
            <BsFillFileEarmarkBarGraphFill className={styles.icons} />
            <p className="text-blue fw-bold mb-1">{experince}</p>
            <small className="text-black-50">Experience</small>
          </div>

          <div>
            <FaStarHalfAlt className={styles.icons} />
            <p className="text-blue fw-bold mb-1">{rate}</p>
            <small className="text-black-50">Rating</small>
          </div>

          <div>
            <RiUserFollowFill className={styles.icons} />
            <p className="text-blue fw-bold mb-1">{position}</p>
            <small className="text-black-50">Position</small>
          </div>

        </div>
        <div className="text-center">
          <BlueBtn title="Book Appointment" action={navigateappontment} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
