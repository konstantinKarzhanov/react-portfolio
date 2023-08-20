import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const navArr = ["about", "projects"];
  const navList = navArr.map((item, index) => (
    <li key={index}>
      <NavLink to={item}>{item}</NavLink>
    </li>
  ));
  return (
    <nav className="main-nav container container--pall text--accent-1 text-capital">
      <ul className="flex flex--ai-c flex--gap">{navList}</ul>
    </nav>
  );
};

export default Navbar;
