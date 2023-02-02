import React from "react";
// react-id-swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// imagenes
import slide1 from "../../assets/JuegosRompeHielo/slide1.png";
import slide2 from "../../assets/JuegosRompeHielo/slide2.png";
import slide3 from "../../assets/JuegosRompeHielo/slide3.png";
import slide4 from "../../assets/JuegosRompeHielo/slide4.png";
import slide5 from "../../assets/JuegosRompeHielo/slide5.png";
import slide6 from "../../assets/JuegosRompeHielo/slide6.png";
import slide7 from "../../assets/JuegosRompeHielo/slide7.png";
import slide8 from "../../assets/JuegosRompeHielo/slide8.png";

const SwiperRompeHielo = ({ numeroSlide }) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto pt-10">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 10500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          initialSlide={numeroSlide}
        >
          <SwiperSlide>
            <img src={slide1} alt="image1" style={{ width: "100%" }}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide2} alt="image2" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="image3" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="image4" style={{ width: "100%" }}></img>
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide5} alt="image5" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="image6" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide7} alt="image7" style={{ width: "100%" }}></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide8} alt="image8" style={{ width: "100%" }}></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperRompeHielo;
