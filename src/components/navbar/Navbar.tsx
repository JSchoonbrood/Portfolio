import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { MdOutlineMonitor } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <button
          onClick={() => window.location.reload()}
          className="reload-button"
        >
          <h1>JS</h1>
        </button>
        <nav className="navbar__links_container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <AiOutlineHome className="icon" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <AiOutlineUser className="icon" />
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <MdOutlineMonitor className="icon" />
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            <AiOutlineContacts className="icon" />
            Contact
          </NavLink>
          <button>Resume</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
