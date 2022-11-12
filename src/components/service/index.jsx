import styles from "./service.module.css";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";

const index = () => {
  return (

    <section className={`${styles.container}  container p-5 rounded-4 `}>
      <div className="row">
        <div className={`col-lg-4 col-md-12 ${styles.content}`}>
          <FaHandHoldingMedical className={`${styles.icon} fs-2 mb-4`} />
          <h2 className="mb-4 text-capitalize fw-bold" >All your healthcare needs</h2>
          <p className="text-black-50" >
            Search and book a clinic visit, home visit, or a teleconsultation.
            Order your medicine and book a service or operation.
          </p>
        </div>
        <div className={`col-lg-4 col-md-12 ${styles.content}`}>
          <BsFillPersonCheckFill className={`${styles.icon} fs-2 mb-4`} />
          <h2 className="mb-4 text-capitalize fw-bold">Verified  patient reviews and rating</h2>
          <p className="text-black-50" >
            Doctor ratings are from patients who booked and visited the doctor
            through Medica.
          </p>
        </div>
        <div className={`col-lg-4 col-md-12 ${styles.content}`}>
          <BsCalendarDate  className={`${styles.icon} fs-2 mb-4`}/>
          <h2 className="mb-4 text-capitalize fw-bold">Your booking is confirmed</h2>
          <p className="text-black-50" >
            Your booking is automatically confirmed, as the doctor specifies his
            working hours and is notified of the booking details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
