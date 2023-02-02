import React from "react";
import { history } from "../components/History";
import volverMini from "../assets/volverMini.png";
import TituloTarjetasBang from "../assets/TituloTarjetasBang.png";
import Crispi from "../assets/Crispi.png";
import Carmel from "../assets/Carmel.png";
import Cesia from "../assets/Cesia.png";
import Cori from "../assets/Cori.png";
import Cristal from "../assets/Cristal.png";
import "../../src/components/fondoEstrellas.css";

export default function TarjetasBANG() {
  function onClickHandler() {
    history.push("/Ideaverso");
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

        <div className=" grid grid-cols-1 md:grid-cols-5 gap-10">
          <div class="grid place-items-center md:col-span-5 pt-20 md:pt-2">
            <img className="h-[140px] md:h-[170px]" src={TituloTarjetasBang} />
          </div>

          <div className="flex flex-col md:flex-col-reverse rounded-md shadow-md text-center md:mb-48">
            <div className="flex flex-col items-center">
              <img className=" h-[180px]" src={Crispi} />
            </div>
            <div className="">
              <button class="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
                <a
                  className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
                  href="/Crispi"
                >
                  Crispi
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow-md text-center md:mt-44">
            <div className="flex flex-col items-center">
              <img className=" h-[180px]" src={Carmel} />
            </div>
            <div className="">
              <button class="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
                <a
                  className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
                  href="/Carmel"
                >
                  Carmel
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-col-reverse rounded-md shadow-md text-center md:mb-48">
            <div className="flex flex-col items-center">
              <img className=" h-[180px]" src={Cesia} />
            </div>
            <div className="">
              <button class="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center ">
                <a
                  className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
                  href="/Cesia"
                >
                  Cesia
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-md shadow-md text-center md:mt-44">
            <div className="flex flex-col items-center">
              <img className=" h-[180px]" src={Cori} />
            </div>
            <div className="">
              <button class="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
                <a
                  className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
                  href="/Cori"
                >
                  Cori
                </a>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-col-reverse rounded-md shadow-md text-center mb-4 md:mb-48">
            <div className="flex flex-col items-center">
              <img className=" h-[180px]" src={Cristal} />
            </div>
            <div className="">
              <button class="border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
                <a
                  className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
                  href="/Cristal"
                >
                  Cristal
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
