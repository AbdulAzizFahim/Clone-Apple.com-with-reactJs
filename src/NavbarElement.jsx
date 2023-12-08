import React from "react";
import "./style/Navbar.css";

const NavbarElement = ({ properties }) => {
  return (
    <div className="navbar-element" id={properties.text}>
      <label>{properties.text}</label>
    </div>
  );
};

export default NavbarElement;
