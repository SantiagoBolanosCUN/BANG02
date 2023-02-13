import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../../src/components/fondoEstrellas.css";
import { history } from "../../components/History";
import volverMini from "../../assets/volverMini.png";
import GR0 from "../CursoBang/AssetsCurso/Inicio/GR0.png";
import GR1 from "../CursoBang/AssetsCurso/Inicio/GR1.png";
import GR2 from "../CursoBang/AssetsCurso/Inicio/GR2.png";
import GR3 from "../CursoBang/AssetsCurso/Inicio/GR3.png";
import GR4 from "../CursoBang/AssetsCurso/Inicio/GR4.png";
import "../CursoBang/AssetsCurso/Inicio/CursoBang.css";
import { Navigation } from "swiper";
import Granulo0 from "./AssetsCurso/GR0/Granulo0.js";
import Granulo1 from "./AssetsCurso/GR1/Granulo1.js";
import Granulo2 from "./AssetsCurso/GR2/Granulo2.js";
import Granulo3 from "./AssetsCurso/GR3/Granulo3.js";
import Granulo4 from "./AssetsCurso/GR4/granulo4.js";
import "animate.css";

const CursoBang = () => {
  const [GR0open, GR0setIsOpen] = useState(true);
  const [GR1open, GR1setIsOpen] = useState(false);
  const [GR2open, GR2setIsOpen] = useState(false);
  const [GR3open, GR3setIsOpen] = useState(false);
  const [GR4open, GR4setIsOpen] = useState(false);

  let arrayGR = [true, false, false, false, false];

  const toggleComponent = (current) => {
    arrayGR.forEach((element, index) => {
      if (index == current) {
        if (arrayGR[index] == false) {
          arrayGR[index] = true;
        }
      } else {
        arrayGR[index] = false;
      }
    });

    GR0setIsOpen(arrayGR[0]);
    GR1setIsOpen(arrayGR[1]);
    GR2setIsOpen(arrayGR[2]);
    GR3setIsOpen(arrayGR[3]);
    GR4setIsOpen(arrayGR[4]);
  };

  function onClickHandler() {
    history.push("/Intraemprendedor");
  }
  return (
    <section className="fondo">
      <div className="absolute top-10 left-10 sm:top-10 sm:left-20 hover:scale-125">
        <button>
          <img
            src={volverMini}
            onClick={onClickHandler}
            alt="image1"
            className="h-[40px] sm:h-[50px]"
          />
          <h1 className="font-bold font-['Montserrat'] pt-1 text-white">
            Volver
          </h1>
        </button>
      </div>

      <div className="grid grid-cols-3 h-screen place-content-center lg:pr-10 pl-3 pr-3 lg:pl-0 ">
        <div className="grid content-center">
          <div className="hidden lg:block max-w-xs ">
            <div
              onClick={() => toggleComponent(0)}
              className="max-w-xs 2xl:max-w-sm pb-2 pt-4"
            >
              <img src={GR1} className="hvr-backward cursor-pointer" />
            </div>
            <div
              onClick={() => toggleComponent(1)}
              className="max-w-xs 2xl:max-w-sm  pb-2"
            >
              <img src={GR0} className="hvr-backward cursor-pointer" />
            </div>
            <div
              onClick={() => toggleComponent(2)}
              className="max-w-xs 2xl:max-w-sm pb-2"
            >
              <img src={GR2} className="hvr-backward cursor-pointer" />
            </div>
            <div
              onClick={() => toggleComponent(3)}
              className="max-w-xs 2xl:max-w-sm  pb-2"
            >
              <img src={GR3} className="hvr-backward cursor-pointer " />
            </div>
            <div
              onClick={() => toggleComponent(4)}
              className="max-w-xs 2xl:max-w-sm  pb-2"
            >
              <img src={GR4} className="hvr-backward cursor-pointer " />
            </div>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2">
          {GR0open && <Granulo0 />}
          {GR1open && <Granulo1 />}
          {GR2open && <Granulo2 />}
          {GR3open && <Granulo3 />}
          {GR4open && <Granulo4 />}
        </div>
      </div>
    </section>
  );
};

export default CursoBang;
