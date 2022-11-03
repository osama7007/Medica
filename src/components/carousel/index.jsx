import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styles from "./slider.module.css";
import doctor1 from "../../assets/images/doctor1.png";
import doctor4 from "../../assets/images/doctor4.png";
import doctor3 from "../../assets/images/doctor3.png";
import doctor2 from "../../assets/images/doctor2.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      autoplay={{ delay: 3000 }}
      speed={1000}
      loop
      spaceBetween={50}
      slidesPerView={1}
      className={`${styles.swiperContainer} mb-5 shadow rounded-3 text-white p-4`}
    >
      <SwiperSlide className="d-flex align-items-center  ">
        <div className={styles.contentContainer}>
          <h2 className="text-white text-capitalize mb-3">
            Choose the service and set the appropriate date
          </h2>
          <p>
            Book using the website, start your recovery journey now, no need to
            wait, choose the type of service and the appropriate time and get
            the full care
          </p>
        </div>

        <div className={styles.imgContainer}>
          <img src={doctor1} alt="doctorphoto" className="mt-2 w-100" />
        </div>
      </SwiperSlide>

      <SwiperSlide className="d-flex align-items-center ">
        <img src={doctor2} alt="doctorphoto" className=" w-50" />

        <h2 className="text-white text-capitalize">
          thousands of doctors & experts to help your health!
        </h2>
      </SwiperSlide>

      <SwiperSlide className="d-flex align-items-center ">
        <h2 className="text-white text-capitalize">
          health checks & consultations easily anywhere anytime
        </h2>

        <img src={doctor3} alt="doctorphoto" className=" w-50 mt-5" />
      </SwiperSlide>

      <SwiperSlide className="d-flex align-items-center ">
        <div className={styles.imgContainer}>
          <img src={doctor4} alt="doctorphoto" className=" w-100 mt-4" />
        </div>

        <h2 className="text-white text-capitalize ms-5">
          let's start living healthy and well with us right now!
        </h2>
      </SwiperSlide>
    </Swiper>
  );
};

// export default Swi;
