import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navArr = ["about", "projects"];
  const navList = navArr.map((item, index) => (
    <li key={index}>
      <NavLink to={item}>{item}</NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{navList}</ul>
    </nav>
  );
};

export default Navbar;
