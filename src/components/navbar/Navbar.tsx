import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links_logo">
          <img></img>
        </div>
        <nav className="navbar__links_container">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar