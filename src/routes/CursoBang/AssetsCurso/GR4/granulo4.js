import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const granulo4 = () => {
  return (
    <div>
      <div className="border-2 border-white grid grid-cols-3 rounded-lg">
        <div className="bg-[#6C2BFF] text-white text-center m-2">
          <h1 className="my-2 text-2xl font-semibold">
            Bienvenida <br></br> BANG
          </h1>
        </div>
        <div className="bg-[#212335] text-white text-center m-2">
          <h1 className="my-2 text-2xl font-semibold">¿Quién soy?</h1>
        </div>
        <div className="bg-[#212749] text-white text-center m-2">
          <h1 className="my-2 text-2xl font-semibold">Nuestra metodología</h1>
        </div>
      </div>
      <br></br>
      <div className="col-span-3 border border-white">
        <div id="galeria">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>qqqqqqqqqqqqqqq 1</SwiperSlide>
            <SwiperSlide>Slasdasdide 2</SwiperSlide>
            <SwiperSlide>Slidasdasdasde 3</SwiperSlide>
            <SwiperSlide>Slasdasdide 4</SwiperSlide>
            <SwiperSlide>Sliasdasdde 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default granulo4;
