import React from "react";
import tituloRompeHielo from "../../assets/JuegosRompeHielo/tituloRompeHielo.png";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import { useState } from "react";
import "../../components/modalRompeHielo.css";
import "../../components/fondoEstrellas.css";

import ModalRompeHielo from "./ModalRompeHielo";

import boton1 from "../../assets/JuegosRompeHielo/boton1.png";
import boton2 from "../../assets/JuegosRompeHielo/boton2.png";
import boton3 from "../../assets/JuegosRompeHielo/boton3.png";
import boton4 from "../../assets/JuegosRompeHielo/boton4.png";
import boton5 from "../../assets/JuegosRompeHielo/boton5.png";
import boton6 from "../../assets/JuegosRompeHielo/boton6.png";
import boton7 from "../../assets/JuegosRompeHielo/boton7.png";
import boton8 from "../../assets/JuegosRompeHielo/boton8.png";
import boton9 from "../../assets/JuegosRompeHielo/boton9.png";

export default function JuegosRompeHielo() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const [numeroSlide, setNumeroSlide] = useState(0);
  const [descripcionSlide, setDescripcionSlide] = useState(0);

  const clicked = (a, b) => {
    setNumeroSlide(a);
    setModalOn(true);
    setDescripcionSlide(b);
  };
  function onClickHandler() {
    history.push("/MeteoroGame");
  }
  return (
    <section className="fondo">
      <div className="grid place-items-center min-h-screen">
        {/* conditionally display the result of the action if user confirms  */}
        {choice && <div className="flex justify-center"></div>}

        {modalOn && (
          <ModalRompeHielo
            setModalOn={setModalOn}
            setChoice={setChoice}
            numeroSlide={numeroSlide}
            descripcionSlide={descripcionSlide}
          />
        )}
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
        <div className="text-center sm:text-left p-4 max-w-5xl grid ">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="grid pt-4 sm:p-0  place-items-center  col-span-2 sm:col-span-3">
              <img className="h-[60px] sm:h-[80px]" src={tituloRompeHielo} />
            </div>

            <div className="grid justify-center sm:m-4">
              <button id={0} onClick={() => clicked(0, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton1}
                  alt="image1"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>

            <div className="grid justify-center sm:m-4">
              <button id={1} onClick={() => clicked(1, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton2}
                  alt="image1"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button id={2} onClick={() => clicked(2, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton3}
                  alt="image1"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button id={3} onClick={() => clicked(3, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton4}
                  alt="image1"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button id={4} onClick={() => clicked(4, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton5}
                  alt="image4"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button id={5} onClick={() => clicked(5, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton6}
                  alt="image5"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button id={6} onClick={() => clicked(6, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton7}
                  alt="image6"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button id={7} onClick={() => clicked(7, "JUEGOS ROMPE HIELO")}>
                <img
                  src={boton8}
                  alt="image7"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
            <div className="grid justify-center sm:m-4">
              <button>
                <img
                  src={boton9}
                  alt="image8"
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
