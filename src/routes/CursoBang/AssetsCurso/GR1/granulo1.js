import React, { useState } from "react";
import GR0U1 from "./U1/GR1U1";

const Granulo1 = () => {
  const [uN1open, uN1setIsOpen] = useState(true);

  let arrayUN = [true];

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

    uN1setIsOpen(arrayUN[0]);
  };
  return (
    <div className="animate__animated animate__fadeInDown">
      <div className="border-2 border-white grid grid-cols-3 rounded-lg">
        <button
          onClick={() => toggleComponent(0)}
          class="bg-[#6C2BFF] hover:bg-[#9060ff]  text-white rounded m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold text-grey-lightest"
        >
          ¿Cómo tomar decisiones?
        </button>
        <button
          // onClick={() => toggleComponent(1)}
          class="bg-[#212335] hover:bg-[#2c2e39] text-white rounded  m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          Nuestra inspiración solida
        </button>
        <button
          // onClick={() => toggleComponent(2)}
          class="bg-[#212749] hover:bg-[#2f344f] text-white rounded p-4 m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          Así se construye un sólido
        </button>
      </div>

      <div
        id="recursos"
        className="col-span-3 border-2 border-white rounded-lg p-4 mt-2"
      >
        {uN1open && <GR0U1 />}
      </div>
    </div>
  );
};

export default Granulo1;
