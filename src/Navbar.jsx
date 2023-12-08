import React from "react";
import NavbarElement from "./NavbarElement";

const navbarElementsProperties = [
  { text: "Store", icon: false },
  { text: "Mac", icon: false },
  { text: "iPad", icon: false },
  { text: "iPhone", icon: false },
  { text: "Watch", icon: false },
  { text: "Vision", icon: false },
  { text: "AirPods", icon: false },
  { text: "TV & Home", icon: false },
  { text: "Entertainment", icon: false },
  { text: "Accessories", icon: false },
  { text: "Support", icon: false },
];
const Navbar = () => {
  return (
    <div className="navbar">
      {navbarElementsProperties.map((item, index) => (
        <NavbarElement key={index} properties={item} />
      ))}
    </div>
  );
};

export default Navbar;
