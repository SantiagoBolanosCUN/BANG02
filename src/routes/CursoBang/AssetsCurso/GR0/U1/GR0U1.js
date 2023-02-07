import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide1 from "../U1/Slide1.jpg";
import Slide3 from "../U1/Slide3.jpg";
import Slide4 from "../U1/Slide4.jpg";
import Slide5 from "../U1/Slide5.jpg";
import Slide6 from "../U1/Slide6.jpg";
import Slide7 from "../U1/Slide7.jpg";

import "../../../estiloSwiper.css";

const GR0U1 = () => {
  return (
    <>
      <Swiper
        autoHeight={true}
        navigation={true}
        modules={[Navigation]}
        className="Swipersito animate__animated animate__fadeIn"
      >
        <SwiperSlide>
          <img src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            className="w-full aspect-video"
            src="https://player.vimeo.com/video/792786273?h=bd50a05b86&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="GR0U1"
          ></iframe>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={Slide3} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={Slide4} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide6} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR0U1;
