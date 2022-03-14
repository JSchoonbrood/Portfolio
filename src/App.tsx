import React from 'react';
import logo from './logo.svg';

import { About, Hero, Navbar, Projects } from './components';
import { Footer } from './containers';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
