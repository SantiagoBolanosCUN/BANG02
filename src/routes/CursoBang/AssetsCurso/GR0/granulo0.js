import React, { useState } from "react";
import GROU1 from "./U1/GR0U1";
import "../../estiloSwiper.css";
import GROU2 from "./U2/GR0U2";
import GROU3 from "./U3/GR0U3";

const Granulo0 = () => {
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
          class="bg-[#6C2BFF] hover:bg-[#9060ff]  text-white rounded m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold text-grey-lightest"
        >
          Bienvenida BANG
        </button>
        <button
          onClick={() => toggleComponent(1)}
          class="bg-[#212335] hover:bg-[#2c2e39] text-white rounded  m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          ¿Quién soy?
        </button>
        <button
          onClick={() => toggleComponent(2)}
          class="bg-[#212749] hover:bg-[#2f344f] text-white rounded p-4 m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          Nuestra metodología
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

export default Granulo0;
