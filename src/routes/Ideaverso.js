import React from "react";
import planetaMini from "../assets/planetaMini.png";
import { history } from "../components/History";
import TarjetasBANG from "../assets/TarjetasBANG.png";
import TarjetasQuillero from "../assets/TarjetasQuillero.png";
import "../../src/components/fondoEstrellas.css";

export default function Ideaverso() {
  function onClickHandler() {
    history.push("/Home");
  }
  return (
    <section className="fondo">
      <div className="grid place-items-center min-h-screen">
        <div className="absolute top-10 left-10 sm:top-10 sm:left-20 hover:scale-125">
          <button>
            <img
              src={planetaMini}
              onClick={onClickHandler}
              alt="image1"
              className="h-[40px] sm:h-[50px]"
            />
            <h1 className="font-bold font-['Montserrat'] pt-1 text-white">
              Inicio
            </h1>
          </button>
        </div>

        <div className="text-center sm:text-left p-4 max-w-5xl grid ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="grid justify-center sm:m-4 mt-10 sm:mr-20">
              <a href="/TarjetasBANG">
                <img
                  className="cursor-pointer w-[180px] sm:w-[200px] hover:scale-125 "
                  src={TarjetasBANG}
                  alt="Logo"
                />
              </a>
            </div>

            <div className="grid justify-center sm:m-4 mt-8 mb-10 sm:ml-20">
              <a href="/Quillero">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125"
                  src={TarjetasQuillero}
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
