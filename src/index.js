import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/Routs/AboutMe.jsx";
import Works from "./Component/Routs/Works.jsx";
import Contact from "./Component/Routs/Contact.jsx";
import Futurest from "./Component/ProjectsComp/Futurest.jsx";
import SkyPtoP from "./Component/ProjectsComp/SkyPtoP.jsx";
import SoloByTaqsim from "./Component/ProjectsComp/SoloByTaqsim.jsx";
import UpComming from "./Component/ProjectsComp/UpComming.jsx";
import Projects from "./Component/Projects.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutMe" element={<About />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/Futurest" element={<Futurest />} />
      <Route path="/project/SkyPtoP" element={<SkyPtoP />} />
      <Route path="/project/SoloByTaqsim" element={<SoloByTaqsim />} />
      <Route path="/project/UpComming" element={<UpComming />} />
    </Routes>
  </BrowserRouter>
);
