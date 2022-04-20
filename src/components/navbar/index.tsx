import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMonitor } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { setFocus } from "../../data/slices/focusSlice";
import "./navbar.scss";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const focusState = useAppSelector((state) => state.focus.value);

  const mql = window.matchMedia("(max-width: 767.98px)");
  mql.addEventListener("change", (event) => {
    // Event listener for window resize to remove blur effect
    if (!event.matches) {
      dispatch(setFocus(false));
    }
  });

  const navbarControl = () => {
    if (window.innerWidth < 767.98) { // Only activate for mobile / small devices view
      if (focusState === true) {
        dispatch(setFocus(false));
      } else {
        dispatch(setFocus(true));
      }
    }
  };

  return (
    <div className="navbar navbar-scrolled">
      <div className="navbar__expand">
        <button className="menu" onClick={navbarControl}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>
      <div className="navbar__links">
        <button
          onClick={() => window.location.reload()}
          className="reload-button"
        >
          <h1>JS</h1>
        </button>
        <nav
          className={
            focusState
              ? "active-nav navbar__links_container"
              : "navbar__links_container"
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={navbarControl}
          >
            <AiOutlineHome className="icon" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={navbarControl}
          >
            <AiOutlineUser className="icon" />
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={navbarControl}
          >
            <MdOutlineMonitor className="icon" />
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={navbarControl}
          >
            <AiOutlineContacts className="icon" />
            Contact
          </NavLink>
          <button className="resume-button">Resume</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
