import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Hero, Navbar, Projects, Left } from "./components";
import { Footer } from "./containers";

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
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
