import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";

import "swiper/css";
import Circle from "../../components/circle";
import derma from "../../assets/images/derma.png";
import pulmono from "../../assets/images/pulmono.png";
import general from "../../assets/images/general.png";
import otolaryngology from '../../assets/images/otolaryngology.png'
import Pediatrics from '../../assets/images/Pediatrics.png'
import internal from '../../assets/images/internal.png'
import eye from '../../assets/images/eye.png'
import Psychiatry from '../../assets/images/Psychiatry.png'
import plasticSurgery from '../../assets/images/plasticSurgery.png'

const Category = () => {
  return (
    <section>
      <h3 className="text-uppercase fw-bold mb-4">Doctor Speciality</h3>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={4}
        className="px-5"
      >
        <SwiperSlide>
          <Circle title="General" img={general}/>
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Dermatology" img={derma} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Pulmonologist" img={pulmono} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Otolaryngology" img={otolaryngology} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Pediatrics" img={Pediatrics} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Internal Medicine" img={internal} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Ophthalmology" img={eye} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="Psychiatry" img={Psychiatry} />
        </SwiperSlide>

        <SwiperSlide>
          <Circle title="plastic Surgery" img={plasticSurgery} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
