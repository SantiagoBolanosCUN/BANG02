import React from "react";

import "../../components/estilosFondo.css";
import RespaldoCrispi from "../../assets/Cartas/CartasCrispi/RespaldoCrispi.png";
import "../Personajes/EstilosPersonajes/EstilosCartas.css";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import Crispi1 from "../../assets/Cartas/CartasCrispi/Crispi1.png";
import Crispi2 from "../../assets/Cartas/CartasCrispi/Crispi2.png";
import Crispi3 from "../../assets/Cartas/CartasCrispi/Crispi3.png";
import Crispi4 from "../../assets/Cartas/CartasCrispi/Crispi4.png";
import Crispi5 from "../../assets/Cartas/CartasCrispi/Crispi5.png";
import Crispi6 from "../../assets/Cartas/CartasCrispi/Crispi6.png";
import Crispi7 from "../../assets/Cartas/CartasCrispi/Crispi7.png";
import Crispi8 from "../../assets/Cartas/CartasCrispi/Crispi8.png";
import Crispi9 from "../../assets/Cartas/CartasCrispi/Crispi9.png";
import Crispi10 from "../../assets/Cartas/CartasCrispi/Crispi10.png";
import CrispiPersonaje from "../../assets/Cartas/CartasCrispi/CrispiPersonaje.png";

const Crispi = () => {
  function onClickHandler() {
    history.push("/TarjetasBANG");
  }
  const images = [
    Crispi1,
    Crispi2,
    Crispi3,
    Crispi4,
    Crispi5,
    Crispi6,
    Crispi7,
    Crispi8,
    Crispi9,
    Crispi10,
  ];
  let randomImg = images[Math.floor(Math.random() * images.length)];

  function get_random_image() {
    let random_index = Math.floor(Math.random() * images.length);
    let selected_image = images[random_index];
    // document.getElementById("image_shower").src = images[0];
    randomImg = selected_image;
    document.getElementById("image_shower").src = randomImg;
  }

  return (
    <section className="perro">
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
      <div className="absolute invisible xl:visible sm:top-72 sm:left-40">
        <img src={CrispiPersonaje} className="h-[80px] sm:h-[390px]" />
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RespaldoCrispi} className="h-[450px] sm:h-[450px]" />
            </div>
            <div className="flip-card-back">
              {/* <img src={randomImg} className="h-[450px] sm:h-[450px]" /> */}
              <img
                src={randomImg}
                id="image_shower"
                className="h-[450px] sm:h-[450px]"
              />
              <br />
              <button
                onClick={get_random_image}
                className="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center"
              >
                <a className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500">
                  Inspirate más
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crispi;
