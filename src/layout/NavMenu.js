import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div class="tabs-container">
      <NavLink className="tab" to="oracle">
        Oracle
      </NavLink>
      <NavLink className="tab" to="icons">
        Semiotic Standard
      </NavLink>
      <NavLink className="tab" to="cdih">
        C-D-I-H (Extended)
      </NavLink>
      <NavLink className="tab" to="decoder">
        Personal Key Decoding
      </NavLink>
    </div>
  );
};

export default NavMenu;
