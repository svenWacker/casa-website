import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">
            <span className="logo_clr1">C</span>
            <span className="logo_clr2">A</span>
            <span className="logo_clr3">S</span>
            <span className="logo_clr4">A</span>
          </h1>
        </Link>
      </div>
      <div>
        <ul className="nav-links">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>Über uns</li>
          </Link>
          <Link to="/blumig" style={{ textDecoration: "none" }}>
            <li>Blumiges</li>
          </Link>
          <Link to="/bewegung" style={{ textDecoration: "none" }}>
            <li>Bewegung</li>
          </Link>
          <Link to="/technik" style={{ textDecoration: "none" }}>
            <li>Technik</li>
          </Link>
          <Link to="/mitmachen" style={{ textDecoration: "none" }}>
            <li>Mitmachen</li>
          </Link>
          <Link to="/termine" style={{ textDecoration: "none" }}>
            <li>Termine</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
