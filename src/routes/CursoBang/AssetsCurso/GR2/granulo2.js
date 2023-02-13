import React, { useState } from "react";
import GROU1 from "./U1/GR2U1.js";
import "../../estiloSwiper.css";
import GROU2 from "./U2/GR2U2.js";
import GROU3 from "./U3/GR2U3.js";

const Granulo2 = () => {
  const [UN1open, UN1setIsOpen] = useState(true);
  const [UN2open, UN2setIsOpen] = useState(false);
  const [UN3open, UN3setIsOpen] = useState(false);

  let arrayUN = [true, false, false];

  const toggleComponent = (current) => {
    arrayUN.forEach((element, index) => {
      if (index == current) {
        if (arrayUN[index] == false) {
          arrayUN[index] = true;
        }
      } else {
        arrayUN[index] = false;
      }
    });

    UN1setIsOpen(arrayUN[0]);
    UN2setIsOpen(arrayUN[1]);
    UN3setIsOpen(arrayUN[2]);
  };

  return (
    <div className="animate__animated animate__fadeInDown">
      <div className="border-2 border-white grid grid-cols-3 rounded-lg">
        <button
          onClick={() => toggleComponent(0)}
          className="bg-[#6C2BFF] hover:bg-[#9060ff]  text-white rounded m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold text-grey-lightest"
        >
          Creatividad
        </button>
        <button
          onClick={() => toggleComponent(1)}
          className="bg-[#212335] hover:bg-[#2c2e39] text-white rounded  m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          ¿Cómo ser creativo?
        </button>
        <button
          onClick={() => toggleComponent(2)}
          className="bg-[#212749] hover:bg-[#2f344f] text-white rounded p-4 m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          Activando las ideas
        </button>
      </div>

      <div
        id="recursos"
        className="col-span-3 border-2 border-white rounded-lg p-4 mt-2"
      >
        {UN1open && <GROU1 />}
        {UN2open && <GROU2 />}
        {UN3open && <GROU3 />}
      </div>
    </div>
  );
};

export default Granulo2;
