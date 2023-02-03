import React from "react";
import imagenModal1 from "./modalSlide5-1.png";
import imagenModal2 from "./modalSlide5-2.png";
import imagenModal3 from "./modalSlide5-3.png";
import imagenModal4 from "./modalSlide5-4.png";
import imagenModal5 from "./modalSlide5-5.png";
import "./estiloModalU3.css";
import cerrar from "../../../../../../src/assets/cerrar.png";

const modalSlide5 = ({ propModal3, open, onClose }) => {
  if (!open) return null;

  const modalImagenes = [
    imagenModal1,
    imagenModal2,
    imagenModal3,
    imagenModal4,
    imagenModal5,
  ];
  let selected_image = modalImagenes[propModal3];
  return (
    <div className="overlay z-20 ">
      <div className="modalContainer">
        <img
          src={selected_image}
          className="animate__animated animate__bounceIn"
        />
      </div>
      <div
        onClick={onClose}
        className="closeBtn w-[40px] h-[40px] cursor-pointer hover:scale-125"
      >
        <img src={cerrar} className="" />
      </div>
    </div>
  );
};

export default modalSlide5;
