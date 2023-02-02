import React from "react";
import "../../components/estilosFondo.css";
import RespaldoCarmel from "../../assets/Cartas/CartasCarmel/RespaldoCarmel.png";
import "../Personajes/EstilosPersonajes/EstilosCartas.css";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import Carmel1 from "../../assets/Cartas/CartasCarmel/Carmel1.png";
import Carmel2 from "../../assets/Cartas/CartasCarmel/Carmel2.png";
import Carmel3 from "../../assets/Cartas/CartasCarmel/Carmel3.png";
import Carmel4 from "../../assets/Cartas/CartasCarmel/Carmel4.png";
import Carmel5 from "../../assets/Cartas/CartasCarmel/Carmel5.png";
import Carmel6 from "../../assets/Cartas/CartasCarmel/Carmel6.png";
import Carmel7 from "../../assets/Cartas/CartasCarmel/Carmel7.png";
import Carmel8 from "../../assets/Cartas/CartasCarmel/Carmel8.png";
import Carmel9 from "../../assets/Cartas/CartasCarmel/Carmel9.png";
import Carmel10 from "../../assets/Cartas/CartasCarmel/Carmel10.png";
import CarmelPersonaje from "../../assets/Cartas/CartasCarmel/CarmelPersonaje.png";

const Carmel = () => {
  function onClickHandler() {
    history.push("/TarjetasBANG");
  }

  const images = [
    Carmel1,
    Carmel2,
    Carmel3,
    Carmel4,
    Carmel5,
    Carmel6,
    Carmel7,
    Carmel8,
    Carmel9,
    Carmel10,
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
        <img src={CarmelPersonaje} className="h-[80px] sm:h-[390px]" />
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RespaldoCarmel} className="h-[450px] sm:h-[450px]" />
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

export default Carmel;
