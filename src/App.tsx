import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { About, Hero, Navbar, Projects, Sidebar, Contact, Archive} from "./components";
import { useAppSelector } from "./data/hooks";

import "./App.scss";

function App() {
  const focusState = useAppSelector((state) => state.focus.value);
  return (
    <div className="App" id="app">
      <div className="layout gradient__bg">
        <header className="layout__navbar">
          <Navbar />
        </header>
        <div className="layout__container">
          <div className="layout__container-sidebar">
            <Sidebar />
          </div>
          <div
            className={"layout__container-components" + (focusState ? " blur" : "")}
          >
            <Routes>
              <Route path="/" element={
                <Fragment>
                  <Hero />
                  <Projects />
                  <About />
                  <Contact />
                </Fragment>
              } />
              <Route path="archive" element={<Archive />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
