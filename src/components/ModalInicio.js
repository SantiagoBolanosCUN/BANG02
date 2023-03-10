import { history } from "./History";
import planetaModal from "../assets/planetaModal.png";
import planetaMini from "../assets/planetaMini.png";
import "../components/fondoEstrellas.css";

const ModalInicio = () => {
  const handleOKClick = () => {
    history.push(`/PostLibreriaOrion`);
  };

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

        <div className="text-center sm:text-left pt-8 max-w-5xl grid gap-4 sm:grid-cols-1 sm:grid-rows-2">
          <div className="mx-auto">
            <img
              src={planetaModal}
              className="h-[250px] sm:h-[300px] mx-auto"
              alt="image1"
            />
          </div>
          <div className="text-center ">
            <h1 className="text-1xl sm:text-2xl font-['Montserrat'] sm:col-span-2 text-white ">
              Por millones de años las constelaciones han ayudado a miles de
              civilizaciones entender el universo y comprender que todos estamos
              conectados.
            </h1>
            <h2 className="pt-8 text-1xl sm:text-2xl font-['Montserrat'] pb-4 font-semibold text-white">
              ¡Conéctate con el conocimiento que tiene nuestra constelación!
            </h2>

            <button class=" border border-white text-white  py-1.5 px-2 rounded-full inline-flex items-center">
              <span
                className="font-['Montserrat'] border-none rounded-full py-1.5 px-8 font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={handleOKClick}
              >
                Descubrir
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalInicio;
