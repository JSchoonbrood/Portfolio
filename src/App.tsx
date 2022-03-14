import React from 'react';
import logo from './logo.svg';

import { About, Hero, Navbar, Projects } from './components';
import { Footer } from './containers';

import './App.css';


function App() {
  return (
    <div className="App" id="app">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
