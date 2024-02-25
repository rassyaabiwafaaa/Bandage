import { HeroImage1 } from "../../../assets/images";
import './style.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";


export default function Hero() {

  return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[716px]"
      >
        <SwiperSlide >
          <img src={HeroImage1} alt="kasdj" />
        </SwiperSlide>

        <SwiperSlide >
          <img src={HeroImage1} alt="kasdj" />
        </SwiperSlide>

         <SwiperSlide >
          <img src={HeroImage1} alt="kasdj" />
        </SwiperSlide>

        <SwiperSlide >
          <img src={HeroImage1} alt="kasdj" />
        </SwiperSlide>
      </Swiper>
  );
}
