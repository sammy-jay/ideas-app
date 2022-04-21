import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  window.addEventListener("scroll", () => setIsOpen(false));

  return (
    <div className="nav">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={`nav-links`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#hiw">How it works</a>
        <a href="#">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div
        className="menu-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BiMenuAltRight />
      </div>

      <div className={`nav-links2 ${isOpen ? "isOpen" : "isClosed"}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#hiw">How it works</a>
        <a href="#">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
