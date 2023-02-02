import React from "react";
import "../../components/estilosFondo.css";
import RespaldoCori from "../../assets/Cartas/CartasCori/RespaldoCori.png";
import "../Personajes/EstilosPersonajes/EstilosCartas.css";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import Cori1 from "../../assets/Cartas/CartasCori/Cori1.png";
import Cori2 from "../../assets/Cartas/CartasCori/Cori2.png";
import Cori3 from "../../assets/Cartas/CartasCori/Cori3.png";
import Cori4 from "../../assets/Cartas/CartasCori/Cori4.png";
import Cori5 from "../../assets/Cartas/CartasCori/Cori5.png";
import Cori6 from "../../assets/Cartas/CartasCori/Cori6.png";
import Cori7 from "../../assets/Cartas/CartasCori/Cori7.png";
import Cori8 from "../../assets/Cartas/CartasCori/Cori8.png";
import Cori9 from "../../assets/Cartas/CartasCori/Cori9.png";
import Cori10 from "../../assets/Cartas/CartasCori/Cori10.png";
import CoriPersonaje from "../../assets/Cartas/CartasCori/CoriPersonaje.png";

const Cori = () => {
  function onClickHandler() {
    history.push("/TarjetasBANG");
  }

  const images = [
    Cori1,
    Cori2,
    Cori3,
    Cori4,
    Cori5,
    Cori6,
    Cori7,
    Cori8,
    Cori9,
    Cori10,
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
        <img src={CoriPersonaje} className="h-[80px] sm:h-[390px]" />
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RespaldoCori} className="h-[450px] sm:h-[450px]" />
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

export default Cori;
