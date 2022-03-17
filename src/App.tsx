import React from 'react';
import logo from './logo.svg';

import { About, Hero, Navbar, Projects, Left } from './components';
import { Footer } from './containers';

import './App.scss';


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
              <Hero />
              <About />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
