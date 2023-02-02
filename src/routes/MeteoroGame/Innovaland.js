import React from "react";
import tituloInnovaland from "../../assets/Innovaland/tituloInnovaland.png";
import volverMini from "../../assets/volverMini.png";
import { history } from "../../components/History";
import boton1 from "../../assets/Innovaland/boton1.png";
import boton2 from "../../assets/Innovaland/boton2.png";
import boton3 from "../../assets/Innovaland/boton3.png";
import boton4 from "../../assets/Innovaland/boton4.png";
import boton5 from "../../assets/Innovaland/boton5.png";
import boton6 from "../../assets/Innovaland/boton6.png";
import boton7 from "../../assets/Innovaland/boton7.png";
import boton8 from "../../assets/Innovaland/boton8.png";
import "../../components/fondoEstrellas.css";

export default function Innovaland() {
  function onClickHandler() {
    history.push("/MeteoroGame");
  }
  return (
    <section className="fondo">
      <div className="grid place-items-center min-h-screen">
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
            <div class="grid pt-4 sm:p-0  place-items-center col-span-2 sm:col-span-3">
              <img
                className="h-[60px] sm:h-[80px]"
                src={tituloInnovaland}
                alt="Titulo"
              />
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton1}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton2}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton3}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton4}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton5}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton6}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton7}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={boton8}
                  alt="Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
