import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide1 from "../U1/Slide1.jpg";
import Slide3 from "../U1/Slide3.jpg";
import Slide4 from "../U1/Slide4.jpg";
import Slide5 from "../U1/Slide5.jpg";
import Slide6 from "../U1/Slide6.jpg";
import Slide7 from "../U1/Slide7.png";
import audio from "../U1/PodcastGR1U1.mp3";

const GR1U1 = () => {
  return (
    <>
      <Swiper
        autoHeight={true}
        navigation={true}
        modules={[Navigation]}
        className="Swipersito animate__animated"
      >
        <SwiperSlide>
          <img src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src="https://player.vimeo.com/video/795614073?h=1c01d646e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Slide2"
            className="w-full aspect-video"
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
          <div className="z-[1] audioGR1U1">
            <audio controlsList="nodownload" controls id="audio">
              <source src={audio} type="audio/mpeg" />
            </audio>
          </div>
          <img src={Slide7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR1U1;
