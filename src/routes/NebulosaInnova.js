import React from "react";
import logo_master from "../assets/Logo_master.png";
import logo_intraemprendedor from "../assets/Logo_intraemprendedor.png";
import logo_trainer from "../assets/Logo_trainer.png";
import planetaMini from "../assets/planetaMini.png";
import { history } from "../components/History";
import Certificaciones from "../assets/Certificaciones.png";
import "../components/fondoEstrellas.css";

export default function NebulosaInnova() {
  function onClickHandler() {
    history.push("/Home");
  }
  return (
    <section className="fondo">
      <div className="grid place-items-center min-h-screen ">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="grid pt-24 sm:p-0  place-items-center   sm:col-span-3">
              <img className="h-[110px] sm:h-[200px]" src={Certificaciones} />
            </div>
            <div className="grid justify-center sm:m-4">
              <a href="/Intraemprendedor">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={logo_intraemprendedor}
                  alt="Logo"
                />
              </a>
            </div>
            <div className="grid justify-center sm:m-4">
              <img
                className="cursor-pointer w-[200px] sm:w-[250px]"
                src={logo_trainer}
                alt="Logo"
              />
            </div>
            <div className="grid justify-center sm:m-4">
              <img
                className="cursor-pointer w-[200px] sm:w-[250px]"
                src={logo_master}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
