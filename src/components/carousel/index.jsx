import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import styles from "./slider.module.css";
import doctor1 from "../../assets/images/doctor1.png";
import doctor4 from "../../assets/images/doctor4.png";
import doctor3 from "../../assets/images/doctor3.png";
import doctor2 from "../../assets/images/doctor2.png";
import "./wave.css";

export default () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className={`${styles.swiperContainer}  text-white `}>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      <Swiper
        autoplay={{ delay: 3000 }}
        speed={1000}
        loop
        spaceBetween={50}
        slidesPerView={1}
        className="px-5"
      >
        <SwiperSlide className="d-flex align-items-center  ">
          <div className="ps-5">
            <h2 className="text-white text-capitalize mb-3">
              Choose the service and set the appropriate date
            </h2>
            <p className="w-75">
              Book using the website, start your recovery journey now, no need
              to wait, choose the type of service and the appropriate time and
              get the full care
            </p>
          </div>

          <div className={styles.imgContainer}>
            <img src={doctor1} alt="doctor photo" className="img-fluid mt-5" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex align-items-center ">
          <img src={doctor2} alt="doctor photo" className="w-50 mt-5" />

          <h2 className="text-white text-capitalize">
            thousands of doctors & experts to help your health!
          </h2>
        </SwiperSlide>

        <SwiperSlide className="d-flex align-items-center">
          <h2 className="text-white text-capitalize ms-5">
            health checks & consultations easily anywhere anytime
          </h2>

          <div className={styles.imgContainer}>
            <img src={doctor3} alt="doctor photo" className="img-fluid mt-5" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="d-flex align-items-center ">
          <div className={styles.imgContainer}>
            <img src={doctor1} alt="doctor photo" className="img-fluid" />
          </div>

          <h2 className="text-white text-capitalize ms-5">
            let's start living healthy and well with us right now!
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
