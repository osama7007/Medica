import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import derma from "../../assets/images/derma.png";
import pulmono from "../../assets/images/pulmono.png";
import otolaryngology from "../../assets/images/otolaryngology.png";
import Pediatrics from "../../assets/images/Pediatrics.png";
import internal from "../../assets/images/internal.png";
import eye from "../../assets/images/eye.png";
import Psychiatry from "../../assets/images/Psychiatry.png";
import plasticSurgery from "../../assets/images/plasticSurgery.png";
import Heading from "../../components/heading";
import styles from "./category.module.css";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <section className="py-5">
      <Heading text="our specialties" />
      <Swiper
        modules={[Navigation, EffectCoverflow, Pagination]}
        pagination={{ clickable: true }}
        effect="coverflow"
        grabCursor
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation
        loop
        slidesPerView="auto"
        autoplay={{ delay: 3000 }}
        speed={1500}
        className="py-5"
      >
        <SwiperSlide
          className={`${styles.container}   rounded-4 shadow d-flex flex-column justify-content-center `}
        >
          <CategoryItem title="Dermatology" img={derma} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow`}
        >
          <CategoryItem title="Pulmonologist" img={pulmono} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="Otolaryngology" img={otolaryngology} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container} rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="Pediatrics" img={Pediatrics} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="Internal Medicine" img={internal} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="Dermatology" img={derma} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="Ophthalmology" img={eye} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="Psychiatry" img={Psychiatry} />
        </SwiperSlide>

        <SwiperSlide
          className={`${styles.container}  rounded-4 shadow d-flex flex-column justify-content-center`}
        >
          <CategoryItem title="plastic Surgery" img={plasticSurgery} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
