import React, { useState } from "react";
import './nav.css'

export default function Nav() {
  // Toggle state to show or hide the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };
    return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyLogo</h2>
      </div>

      {/* Hamburger icon */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu items */}
      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Myprojects">Services</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
    )
}