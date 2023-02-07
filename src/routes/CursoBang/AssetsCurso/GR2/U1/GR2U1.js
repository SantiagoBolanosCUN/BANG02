import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide1 from "../U1/Slide1.png";
import Slide3 from "../U1/Slide3.png";
import Slide4 from "../U1/Slide4.png";
import Slide5 from "../U1/Slide5.png";
import Slide6 from "../U1/Slide6.png";
import Slide7 from "../U1/Slide7.png";
import Slide8 from "../U1/Slide8.png";
import Slide9 from "../U1/Slide9.png";
import "../../../estiloSwiper.css";
import audio from "../U1/PodcastGR2U1.wav";
import "../../GR0/U3/estiloModalU3.css";

const GR2U1 = () => {
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
            src="https://player.vimeo.com/video/796743962?h=56ff5805a7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="w-full aspect-video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Slide2"
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
        <SwiperSlide>
          <img src={Slide8} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="z-[1]">
            <audio controlsList="nodownload" controls id="audio">
              <source src={audio} type="audio/mpeg" />
            </audio>
          </div>
          <img src={Slide9} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR2U1;
