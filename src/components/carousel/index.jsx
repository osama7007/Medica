import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styles from "./slider.module.css";
import doctor1 from "../../assets/images/doctor1.png";
import doctor4 from "../../assets/images/doctor4.png";
import doctor3 from "../../assets/images/doctor3.png";
import doctor2 from "../../assets/images/doctor2.png";

export default () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      speed={1000}
      loop
      spaceBetween={50}
      slidesPerView={1}
      className={`${styles.swiperContainer} mb-5 shadow text-white p-4`}
    >
      <SwiperSlide className="d-flex align-items-center px-5 ">
        <div className={styles.contentContainer}>
          <h2 className="text-white text-capitalize mb-3">
            Choose the service and set the appropriate date
          </h2>
          <p className="w-75">
            Book using the website, start your recovery journey now, no need to
            wait, choose the type of service and the appropriate time and get
            the full care
          </p>
        </div>

        <div className={styles.imgContainer}>
          <img src={doctor1} alt="doctor photo" className="mt-2 w-100" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="d-flex align-items-center px-5">
        <img src={doctor2} alt="doctor photo" className=" w-50" />

        <h2 className="text-white text-capitalize">
          thousands of doctors & experts to help your health!
        </h2>
      </SwiperSlide>

      <SwiperSlide className="d-flex align-items-center px-5">
        <h2 className="text-white text-capitalize">
          health checks & consultations easily anywhere anytime
        </h2>

        <img src={doctor3} alt="doctor photo" className=" w-50 mt-5" />
      </SwiperSlide>

      <SwiperSlide className="d-flex align-items-center px-5 ">
        <img src={doctor4} alt="doctor photo" className=" w-25 mt-4" />

        <h2 className="text-white text-capitalize ms-5">
          let's start living healthy and well with us right now!
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};
