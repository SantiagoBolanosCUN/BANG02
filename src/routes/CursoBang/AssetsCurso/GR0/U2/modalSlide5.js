import React from "react";
import imagenModal from "./modalSlide5.png";
import "./estiloModal.css";
import cerrar from "../../../../../../src/assets/cerrar.png";

const modalSlide5 = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay z-20 ">
      <div className="modalContainer">
        <img
          src={imagenModal}
          className="animate__animated animate__bounceIn "
        />
      </div>
      <div
        onClick={onClose}
        className="closeBtn w-[40px] h-[40px] cursor-pointer hover:scale-125"
      >
        <img src={cerrar} className=" " />
      </div>
    </div>
  );
};

export default modalSlide5;
