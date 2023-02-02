import React from "react";
import "../../components/estilosFondo.css";
import RespaldoCristal from "../../assets/Cartas/CartasCristal/RespaldoCristal.png";
import "../Personajes/EstilosPersonajes/EstilosCartas.css";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import Cristal1 from "../../assets/Cartas/CartasCristal/Cristal1.png";
import Cristal2 from "../../assets/Cartas/CartasCristal/Cristal2.png";
import Cristal3 from "../../assets/Cartas/CartasCristal/Cristal3.png";
import Cristal4 from "../../assets/Cartas/CartasCristal/Cristal4.png";
import Cristal5 from "../../assets/Cartas/CartasCristal/Cristal5.png";
import Cristal6 from "../../assets/Cartas/CartasCristal/Cristal6.png";
import Cristal7 from "../../assets/Cartas/CartasCristal/Cristal7.png";
import Cristal8 from "../../assets/Cartas/CartasCristal/Cristal8.png";
import Cristal9 from "../../assets/Cartas/CartasCristal/Cristal9.png";
import Cristal10 from "../../assets/Cartas/CartasCristal/Cristal10.png";
import CristalPersonaje from "../../assets/Cartas/CartasCristal/CristalPersonaje.png";

const Cristal = () => {
  function onClickHandler() {
    history.push("/TarjetasBANG");
  }

  const images = [
    Cristal1,
    Cristal2,
    Cristal3,
    Cristal4,
    Cristal5,
    Cristal6,
    Cristal7,
    Cristal8,
    Cristal9,
    Cristal10,
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
        <img src={CristalPersonaje} className="h-[80px] sm:h-[390px]" />
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RespaldoCristal} className="h-[450px] sm:h-[450px]" />
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

export default Cristal;
