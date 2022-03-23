import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts} from 'react-icons/ai'
import { MdOutlineMonitor } from 'react-icons/md'
import './navbar.scss'

const Navbar = () => {
  const [isActive, setActive] = useState(0);

  const handleClick = (component: number) => {
    setActive(isActive => component);
  }

  return (
    <div className="navbar">
      <div className="navbar__links">
        <a href="#app"><h1>JS</h1></a>
        <nav className="navbar__links_container">
          <a href="#app" onClick={() => handleClick(0)} className={isActive === 0 ? "active" : ""}><AiOutlineHome className="icon"/>Home</a>
          <a href="#about" onClick={() => handleClick(1)} className={isActive === 1 ? "active" : ""}><AiOutlineUser className="icon"/>About</a>
          <a href="#projects" onClick={() => handleClick(2)} className={isActive === 2 ? "active" : ""}><MdOutlineMonitor className="icon"/>Projects</a>
          <a href="#contact" onClick={() => handleClick(3)} className={isActive === 3 ? "active" : ""}><AiOutlineContacts className="icon"/>Contact</a>
          <button>Resume</button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar