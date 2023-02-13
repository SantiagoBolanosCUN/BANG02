import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide1 from "../U3/Slide1.jpg";
import Slide3 from "../U3/Slide3.jpg";
import "../../../estiloSwiper.css";
import "../../GR0/U3/estiloModalU3.css";
import boton from "../U3/jugarbtn.png";

const GR2U3 = () => {
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
            src="https://player.vimeo.com/video/797164962?h=da0735b2df&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Activar las ideas"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <button id="botonJugar" className="z-[1] hover:w-2xl hover:scale-125">
            <img src={boton} />
          </button>
          <img src={Slide3} />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR2U3;
