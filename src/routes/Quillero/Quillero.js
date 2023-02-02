import React from "react";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import "../../components/estilosFondoQuillero.css";
import "../Personajes/EstilosPersonajes/EstilosCartas.css";
import RespaldoQuillero from "../../assets/Cartas/CartasQuillero/RespaldoQuillero.png";
import Quillero1 from "../../assets/Cartas/CartasQuillero/Quillero1.png";
import Quillero2 from "../../assets/Cartas/CartasQuillero/Quillero2.png";
import Quillero3 from "../../assets/Cartas/CartasQuillero/Quillero3.png";
import Quillero4 from "../../assets/Cartas/CartasQuillero/Quillero4.png";
import Quillero5 from "../../assets/Cartas/CartasQuillero/Quillero5.png";
import Quillero6 from "../../assets/Cartas/CartasQuillero/Quillero6.png";
import Quillero7 from "../../assets/Cartas/CartasQuillero/Quillero7.png";
import Quillero8 from "../../assets/Cartas/CartasQuillero/Quillero8.png";
import Quillero9 from "../../assets/Cartas/CartasQuillero/Quillero9.png";
import Quillero10 from "../../assets/Cartas/CartasQuillero/Quillero10.png";
import QuilleroPersonaje1 from "../../assets/Cartas/CartasQuillero/QuilleroPersonaje1.png";
import QuilleroPersonaje2 from "../../assets/Cartas/CartasQuillero/QuilleroPersonaje2.png";

export default function Quillero() {
  function onClickHandler() {
    history.push("/Ideaverso");
  }

  const images = [
    Quillero1,
    Quillero2,
    Quillero3,
    Quillero4,
    Quillero5,
    Quillero6,
    Quillero7,
    Quillero8,
    Quillero9,
    Quillero10,
  ];
  let randomImg = images[Math.floor(Math.random() * images.length)];

  function get_random_image() {
    let random_index = Math.floor(Math.random() * images.length);
    let selected_image = images[random_index];
    // document.getElementById("image_shower").src = images[0];
    randomImg = selected_image;
    document.getElementById("image_shower").src = randomImg;
    console.log(randomImg);
    console.log(random_index);
  }
  return (
    <section className="fondoQuillero">
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
      <div className="absolute invisible xl:visible sm:top-48 sm:left-52">
        <img src={QuilleroPersonaje1} className="sm:h-[480px]" />
      </div>
      <div className="absolute invisible xl:visible sm:top-64 sm:right-20">
        <img src={QuilleroPersonaje2} className="sm:h-[400px]" />
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={RespaldoQuillero} className="h-[450px] sm:h-[450px]" />
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
}
