import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import boton from "./botonAbrir.png";
import Slide1 from "../U3/Slide1.jpg";
import Slide2 from "../U3/Slide2.jpg";
import Slide3 from "../U3/Slide3.png";
import Slide4 from "../U3/Slide4.jpg";
import Slide5 from "../U3/Slide5.png";
import Slide6 from "../U3/Slide6.png";
import Slide7 from "../U3/Slide7.png";
import Slide8 from "../U3/Slide8.jpg";
import Slide9 from "../U3/Slide9.png";
import MODALSLIDE3 from "./modalSlide3";
import MODALSLIDE4 from "../U3/modalSlide4";
import MODALSLIDE5 from "../U3/modalSlide5";
import MODALSLIDE6 from "../U3/modalSlide6";
import MODALSLIDE8 from "../U3/modalSlide7";
import jugar from "../U3/jugar.png";

import "./estiloModalU3.css";

const GR0U3 = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const [datos, estableceDatos] = useState("");
  const [datos2, estableceDatos2] = useState("");
  const [datos3, estableceDatos3] = useState("");
  const [datos4, estableceDatos4] = useState("");
  const [datos5, estableceDatos5] = useState("");

  const propModal = (index) => {
    estableceDatos(index);
  };
  const propModal2 = (index) => {
    estableceDatos2(index);
  };
  const propModal3 = (index) => {
    estableceDatos3(index);
  };
  const propModal4 = (index) => {
    estableceDatos4(index);
  };
  const propModal5 = (index) => {
    estableceDatos5(index);
  };

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
          <img src={Slide2} />{" "}
        </SwiperSlide>

        <SwiperSlide>
          <MODALSLIDE3
            propModal={datos}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          <img src={Slide3} />{" "}
          <button
            onClick={() => {
              estableceDatos("0");
              setOpenModal(true);
            }}
            id="btnMS31"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal("1");
              setOpenModal(true);
            }}
            id="btnMS32"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal("2");
              setOpenModal(true);
            }}
            id="btnMS313"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <MODALSLIDE4
            propModal2={datos2}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          <img src={Slide4} />{" "}
          <button
            onClick={() => {
              estableceDatos2("0");
              setOpenModal(true);
            }}
            id="btnMS41"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal2("1");
              setOpenModal(true);
            }}
            id="btnMS42"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal2("2");
              setOpenModal(true);
            }}
            id="btnMS43"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <MODALSLIDE5
            propModal3={datos3}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          <img src={Slide5} />{" "}
          <button
            onClick={() => {
              estableceDatos3("0");
              setOpenModal(true);
            }}
            id="btnMS51"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal3("1");
              setOpenModal(true);
            }}
            id="btnMS52"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal3("2");
              setOpenModal(true);
            }}
            id="btnMS53"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal3("3");
              setOpenModal(true);
            }}
            id="btnMS54"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal3("4");
              setOpenModal(true);
            }}
            id="btnMS55"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal3("5");
              setOpenModal(true);
            }}
            id="btnMS56"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <MODALSLIDE6
            propModal4={datos4}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          <img src={Slide6} />{" "}
          <button
            onClick={() => {
              estableceDatos4("0");
              setOpenModal(true);
            }}
            id="btnMS61"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal4("1");
              setOpenModal(true);
            }}
            id="btnMS62"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal4("2");
              setOpenModal(true);
            }}
            id="btnMS63"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Slide7} />
        </SwiperSlide>

        <SwiperSlide>
          <MODALSLIDE8
            propModal5={datos5}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          <img src={Slide8} />{" "}
          <button
            onClick={() => {
              estableceDatos5("0");
              setOpenModal(true);
            }}
            id="btnMS81"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal5("1");
              setOpenModal(true);
            }}
            id="btnMS82"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
          <button
            onClick={() => {
              propModal5("2");
              setOpenModal(true);
            }}
            id="btnMS83"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={boton} />
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button
            onClick={() => {
              propModal5("2");
              setOpenModal(true);
            }}
            id="btnJugar"
            className="z-[1] hover:w-2xl hover:scale-125"
          >
            <img src={jugar} />
          </button>
          <img src={Slide9} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default GR0U3;
