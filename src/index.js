import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/Routs/AboutMe.jsx";
import Works from "./Component/Routs/Works.jsx";
import Contact from "./Component/Routs/Contact.jsx";
import ProjectList from "./Component/ProjectsComp/ProjectList.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutMe" element={<About />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/project/:projectId" element={<ProjectList />} />
    </Routes>
  </BrowserRouter>
);
