import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import "./App.css";
import Detail from "./routes/Detail";
import ThreeRouter from "./components/ThreeRouter";
import { history } from "./components/History";
import NebulosaInnova from "./routes/NebulosaInnova";
import Supernova from "./routes/Supernova";
import Ideaverso from "./routes/Ideaverso";
import LibreriaOrion from "./routes/LibreriaOrion";
import MeteoroGame from "./routes/MeteoroGame";
import Login from "./routes/Login";
import ModalInicio from "./components/ModalInicio";
import Intraemprendedor from "./routes/Intraemprendedor";
import TarjetasBANG from "./routes/TarjetasBANG";

import Crispi from "./routes/Personajes/Crispi";
import Carmel from "./routes/Personajes/Carmel";
import Cesia from "./routes/Personajes/Cesia";
import Cori from "./routes/Personajes/Cori";
import Cristal from "./routes/Personajes/Cristal";
import Quillero from "./routes/Quillero/Quillero";
import CursoBang from "./routes/CursoBang/CursoBang";

import JuegosRompeHielo from "./routes/MeteoroGame/JuegosRompeHielo";
import Innovaland from "./routes/MeteoroGame/Innovaland";

export default function App() {
  return (
    <div className=" h-screen">
      <ThreeRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/detail/:plantetId" element={<Detail />} />
          <Route path="/NebulosaInnova" element={<NebulosaInnova />} />
          <Route path="/Supernova" element={<Supernova />} />
          <Route path="/Ideaverso" element={<Ideaverso />} />
          <Route path="/MeteoroGame" element={<MeteoroGame />} />
          <Route path="/PostLibreriaOrion" element={<LibreriaOrion />} />
          <Route path="LibreriaOrion" element={<ModalInicio />} />
          <Route path="/Intraemprendedor" element={<Intraemprendedor />} />
          <Route path="/TarjetasBANG" element={<TarjetasBANG />} />
          <Route path="/Crispi" element={<Crispi />} />
          <Route path="/Carmel" element={<Carmel />} />
          <Route path="/Cesia" element={<Cesia />} />
          <Route path="/Cori" element={<Cori />} />
          <Route path="/Cristal" element={<Cristal />} />
          <Route path="/JuegosRompeHielo" element={<JuegosRompeHielo />} />
          <Route path="/Innovaland" element={<Innovaland />} />
          <Route path="/Quillero" element={<Quillero />} />
          <Route path="/CursoBang" element={<CursoBang />} />
        </Routes>
      </ThreeRouter>
    </div>
  );
}
