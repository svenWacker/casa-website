import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar">
      <div id="logo-wrapper">
        <h1 className="logo">
          <span className="logo_clr1">C</span>
          <span className="logo_clr2">A</span>
          <span className="logo_clr3">S</span>
          <span className="logo_clr4">A</span>
        </h1>
      </div>

      {/* <ul className="nav-links"> */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <li>Home</li>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <li>Über uns</li>
      </Link>
      <Link to="/blumisch" style={{ textDecoration: "none" }}>
        <li>Blumisch</li>
      </Link>
      <Link to="/beweglisch" style={{ textDecoration: "none" }}>
        <li>Beweglisch</li>
      </Link>
      <Link to="/teschnisch" style={{ textDecoration: "none" }}>
        <li>Teschnisch</li>
      </Link>
      <Link to="/mitmachen" style={{ textDecoration: "none" }}>
        <li>Mitmachen</li>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <li>Kontakt</li>
      </Link>

      {/* </ul> */}
    </nav>
  );
};

export default Menu;
