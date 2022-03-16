import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts} from 'react-icons/ai'
import { MdOutlineMonitor } from 'react-icons/md'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links_logo">
          <img></img>
        </div>
        <nav className="navbar__links_container">
          <a href="#app"><AiOutlineHome /> Home</a>
          <a href="#about"><AiOutlineUser /> About</a>
          <a href="#projects"><MdOutlineMonitor /> Projects</a>
          <a href="#contact"><AiOutlineContacts /> Contact</a>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar