import styles from "./card.module.css";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import BlueBtn from "../buttons/blueBtn";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { slugifyDoctor } from "../../utils/slugify";

const Card = ({ img, title, rate, position, experince, specialty }) => {
  const navigate = useNavigate();

  const navigateappontment = () => {
    navigate(`/appointment?doctor=${slugifyDoctor(title)}`);
  };

  return (
    <motion.div
      layout
      className={`${styles.cardContainer} 
      w-100 
      row
      align-items-center
      justify-content-center
      shadow
      rounded-4 mb-2 py-2 m-auto
    
     `}
    >
      <div className="col-lg-4 mt-3 col d-flex flex-column justify-content-center align-content-center">
        <Link to={`/doctors/${slugifyDoctor(title)}`} className=" col-lg-2">
          <div className={`${styles.imgContainer} m-auto`}>
            <img src={img} alt={title} className="rounded-4" />
          </div>
        </Link>
        <div className="text-wrapper m-auto">
          <Link
            to={`/doctors/${slugifyDoctor(title)}`}
            className=" text-decoration-none text-dark "
          >
            <p className="fw-bold fs-5 mb-1 text-center ">{title}</p>
          </Link>
          <Link
            to={`/doctors/${slugifyDoctor(title)}`}
            className=" text-decoration-none text-dark "
          >
            <p className="text-center text-uppercase text-blue bg-lightBlue p-2">
              {specialty}
            </p>
          </Link>
        </div>
      </div>

      <div className="col-lg-6 col ms-lg-0 ms-sm-4">
        <div
          className={`
        row
        justify-content-center
         align-items-center
         text-center mb-4`}
        >
          <div className=" col-4">
            <BsFillFileEarmarkBarGraphFill className={styles.icons} />
            <p className="text-blue fw-bold mb-1">{experince}</p>
            <small className="text-black-50">Experience</small>
          </div>

          <div className=" col-4 ">
            <FaStarHalfAlt className={styles.icons} />
            <p className="text-blue fw-bold mb-1">{rate}</p>
            <small className="text-black-50">Rating</small>
          </div>

          <div className=" col-4 ">
            <RiUserFollowFill className={styles.icons} />
            <p className="text-blue fw-bold mb-1">{position}</p>
            <small className="text-black-50">Position</small>
          </div>
        </div>
        <div className="text-center mb-3">
          <BlueBtn title="Book Appointment" action={navigateappontment} />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
