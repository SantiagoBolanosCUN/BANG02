import { useState } from "react";
import volverMini from "../assets/volverMini.png";
import { history } from "../components/History";
import tituloIntraemprendedor from "../assets/tituloIntraemprendedor.png";
import aturitmo from "../assets/aturitmo.png";
import práctica from "../assets/práctica.png";
import preguntas from "../assets/preguntas.png";
import ModalPreguntas from "./Modals/ModalPreguntas";
import "../../src/components/fondoEstrellas.css";
import { Fragment } from "react";
import "../routes/CursoBang/CursoBang";

export default function Intraemprendedor() {
  const [showModal, setShowModal] = useState(false);

  function onClickHandler() {
    history.push("/NebulosaInnova");
  }
  return (
    <Fragment>
      <section className="fondo">
        <div className="grid place-items-center min-h-screen z-0">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
              <div className="grid pt-24 sm:p-0  place-items-center   sm:col-span-3">
                <img
                  className="h-[90px] sm:h-[180px]"
                  src={tituloIntraemprendedor}
                  alt="Logo"
                />
              </div>
              <div className="grid justify-center sm:m-4">
                <a href="/CursoBang">
                  <img
                    className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                    src={aturitmo}
                    alt="Logo"
                  />
                </a>
              </div>

              <div className="grid justify-center sm:m-4">
                <button onClick={() => setShowModal(true)}>dasdas</button>
              </div>

              <div className="grid justify-center sm:m-4">
                <img
                  className="cursor-pointer w-[200px] sm:w-[250px] hover:scale-125 "
                  src={práctica}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <ModalPreguntas isVisible={showModal} />
      </section>
    </Fragment>
  );
}
