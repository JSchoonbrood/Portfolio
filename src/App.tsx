import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Hero, Navbar, Projects, Left, Contact } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App" id="app">
      <div className="gradient__bg">
        <div className="margin-left">
          <Navbar />
          <div className="main-screen">
            <div className="sidebar">
              <Left />
            </div>
            <div className="components">
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
    </div>
  );
}

export default App;
