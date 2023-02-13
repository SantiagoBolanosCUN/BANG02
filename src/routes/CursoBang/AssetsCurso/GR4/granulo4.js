import React, { useState } from "react";
import GR4U1 from "./U1/GR4U1.js";
import "../../estiloSwiper.css";
import GR4U2 from "./U2/GR4U2.js";
import GR4U3 from "./U3/GR4U3.js";

const Granulo4 = () => {
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
          GR4U1
        </button>
        <button
          onClick={() => toggleComponent(1)}
          className="bg-[#212335] hover:bg-[#2c2e39] text-white rounded  m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          GR4U2
        </button>
        <button
          onClick={() => toggleComponent(2)}
          className="bg-[#212749] hover:bg-[#2f344f] text-white rounded p-4 m-4 shadow text-xs sm:text-xl lg:text-xl font-semibold  text-grey-lightest"
        >
          GR4U3
        </button>
      </div>

      <div
        id="recursos"
        className="col-span-3 border-2 border-white rounded-lg p-4 mt-2"
      >
        {UN1open && <GR4U1 />}
        {UN2open && <GR4U2 />}
        {UN3open && <GR4U3 />}
      </div>
    </div>
  );
};

export default Granulo4;
