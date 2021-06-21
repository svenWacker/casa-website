import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar">
      <h1>CASA</h1>

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
