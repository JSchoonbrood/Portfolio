import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts} from 'react-icons/ai'
import { MdOutlineMonitor } from 'react-icons/md'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <a href="#app"><h1>JS</h1></a>
        <nav className="navbar__links_container">
          <a href="#app"><AiOutlineHome className="icon"/>Home</a>
          <a href="#about"><AiOutlineUser className="icon"/>About</a>
          <a href="#projects"><MdOutlineMonitor className="icon"/>Projects</a>
          <a href="#contact"><AiOutlineContacts className="icon"/>Contact</a>
          <button>Resume</button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar