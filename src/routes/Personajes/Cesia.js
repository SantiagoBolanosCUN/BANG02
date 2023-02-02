import React from "react";
import "../../components/estilosFondo.css";
import RespaldoCesia from "../../assets/Cartas/CartasCesia/RespaldoCesia.png";
import "../Personajes/EstilosPersonajes/EstilosCartas.css";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import Cesia1 from "../../assets/Cartas/CartasCesia/Cesia1.png";
import Cesia2 from "../../assets/Cartas/CartasCesia/Cesia2.png";
import Cesia3 from "../../assets/Cartas/CartasCesia/Cesia3.png";
import Cesia4 from "../../assets/Cartas/CartasCesia/Cesia4.png";
import Cesia5 from "../../assets/Cartas/CartasCesia/Cesia5.png";
import Cesia6 from "../../assets/Cartas/CartasCesia/Cesia6.png";
import Cesia7 from "../../assets/Cartas/CartasCesia/Cesia7.png";
import Cesia8 from "../../assets/Cartas/CartasCesia/Cesia8.png";
import Cesia9 from "../../assets/Cartas/CartasCesia/Cesia9.png";
import Cesia10 from "../../assets/Cartas/CartasCesia/Cesia10.png";
import CesiaPersonaje from "../../assets/Cartas/CartasCesia/CesiaPersonaje.png";

const Cesia = () => {
  function onClickHandler() {
    history.push("/TarjetasBANG");
  }

  const images = [
    Cesia1,
    Cesia2,
    Cesia3,
    Cesia4,
    Cesia5,
    Cesia6,
    Cesia7,
    Cesia8,
    Cesia9,
    Cesia10,
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
        <img src={CesiaPersonaje} className="h-[80px] sm:h-[390px]" />
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RespaldoCesia} className="h-[450px] sm:h-[450px]" />
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

export default Cesia;
