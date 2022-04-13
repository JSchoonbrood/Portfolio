import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMonitor } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { disable, enable } from "../../data/slices/focusSlice";
import "./navbar.scss";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.focus.value);

  const navbarControl = () => {
    if (value === 1) {
      dispatch(enable());
      console.info(value);
    } else {
      dispatch(disable());
      console.info(value);
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
            value
              ? "active-nav navbar__links_container"
              : "navbar__links_container"
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={() => dispatch(enable())}
          >
            <AiOutlineHome className="icon" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={() => dispatch(enable())}
          >
            <AiOutlineUser className="icon" />
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={() => dispatch(enable())}
          >
            <MdOutlineMonitor className="icon" />
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active link" : "link")}
            onClick={() => dispatch(enable())}
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
