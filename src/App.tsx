import React, { Ref } from "react";
import { Routes, Route } from "react-router-dom";
import { About, Hero, Navbar, Projects, Left, Contact } from "./components";
import { useAppSelector } from "./data/hooks";

import "./App.scss";

function App() {
  const value = useAppSelector((state) => state.focus.value);
  return (
    <div className="App" id="app">
      <div className="layout gradient__bg">
        <header className="layout__navbar">
          <Navbar />
        </header>
        <div className="layout__container">
          <div className="layout__container-sidebar">
            <Left />
          </div>
          <div 
          className={
            value
              ? "layout__container-components blur"
              : "layout__container-components"
          }>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
