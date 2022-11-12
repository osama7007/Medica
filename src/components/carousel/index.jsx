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
    <section className={`${styles.swiperContainer} text-white shadow`}>
      <Swiper
        // autoplay={{ delay: 3000 }}
        speed={1000}
        loop
        spaceBetween={50}
        slidesPerView={1}
    
      >
        <SwiperSlide
          className={`w-100 h-100 d-flex align-items-center justify-content-center ${styles.slide} `}
        >
          <div
            className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center ${styles.text}`}
          >
            <h2 className={`text-white text-capitalize mb-3 `}>
              Choose the service and set the appropriate date
            </h2>
            <p className={styles.w75}>
              Book using the website, start your recovery journey now, no need
              to wait, choose the type of service and the appropriate time and
              get the full care
            </p>
          </div>

          <div className={styles.imgContainer}>
            <img
              src={doctor1}
              alt="doctorphoto"
              className={`img-fluid mt-5 ${styles.img}`}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className={`d-flex align-items-center ${styles.slide} `}>
          <img
            src={doctor2}
            alt="doctorphoto"
            className={`w-50 ${styles.img}`}
            style={{ marginTop: "19.5px" }}
          />
          <h2 className={`text-white text-capitalize ${styles.text}`}>
            thousands of doctors & experts to help your health!
          </h2>
        </SwiperSlide>

        <SwiperSlide className={`d-flex align-items-center ${styles.slide} `}>
          <img
            src={doctor3}
            alt="doctorphoto"
            className={`w-50 ${styles.img}`}
            style={{ marginTop: "103px" }}
          />

          <h2 className={`text-white text-capitalize  ${styles.text}`}>
            health checks & consultations easily anywhere anytime.
          </h2>
        </SwiperSlide>

        <SwiperSlide className={`d-flex align-items-center ${styles.slide} `}>
          <h2 className={`text-white text-capitalize  ${styles.text}`}>
            let's start living healthy and well with us right now!
          </h2>
          <img
            src={doctor4}
            alt="doctorphoto"
            style={{ width: "60%" }}
            className={`mt-2 ${styles.img}`}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
