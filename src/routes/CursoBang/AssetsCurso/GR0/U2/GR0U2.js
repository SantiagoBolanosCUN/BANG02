import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide2 from "../U2/Slide2.png";
import Slide3 from "../U2/Slide3.png";
import Slide4 from "../U2/Slide4.png";
import Slide5 from "../U2/Slide5.png";
import Slide6 from "../U2/Slide6.png";
import Slide7 from "../U2/Slide7.png";
import Slide8 from "../U2/Slide8.png";
import Slide9 from "../U2/Slide9.png";
import Slide10 from "../U2/Slide10.png";
import BotonSlide4 from "../U2/BotonSlide4.png";
import MODAL4 from "./modalSlide4";
import MODAL5 from "./modalSlide5";
import MODAL6 from "./modalSlide6";
import MODAL7 from "./modalSlide7";
import MODAL8 from "./modalSlide8";

import "../../../estiloSwiper.css";

const GR0U2 = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Swiper
        autoHeight={true}
        navigation={true}
        modules={[Navigation]}
        className="Swipersito  animate__animated animate__bounceIn"
      >
        <SwiperSlide>
          <iframe
            className="w-full aspect-video"
            src="https://player.vimeo.com/video/792786273?h=bd50a05b86&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="GR0U1"
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <img src={Slide3} />{" "}
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div className="relative ">
            <MODAL4
              open={openModal}
              onClose={() => setOpenModal(false)}
              className=""
            />
            <img src={Slide4} />
            <button
              onClick={() => setOpenModal(true)}
              id="botonAbsoluto"
              className="z-[1] hover:w-2xl hover:scale-125"
            >
              <img src={BotonSlide4} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <MODAL5 open={openModal} onClose={() => setOpenModal(false)} />
          <img src={Slide5} />{" "}
          <button
            onClick={() => setOpenModal(true)}
            id="botonAbsoluto2"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={BotonSlide4} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <MODAL6 open={openModal} onClose={() => setOpenModal(false)} />
          <img src={Slide6} />{" "}
          <button
            onClick={() => setOpenModal(true)}
            id="botonAbsoluto3"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={BotonSlide4} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <MODAL7 open={openModal} onClose={() => setOpenModal(false)} />
          <img src={Slide7} />{" "}
          <button
            onClick={() => setOpenModal(true)}
            id="botonAbsoluto4"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={BotonSlide4} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <MODAL8 open={openModal} onClose={() => setOpenModal(false)} />
          <img src={Slide8} />{" "}
          <button
            onClick={() => setOpenModal(true)}
            id="botonAbsoluto5"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={BotonSlide4} />
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide9} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide10} />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR0U2;
