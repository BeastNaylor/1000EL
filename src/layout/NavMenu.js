import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="tabs-container">
      <NavLink className="tab" end to="/">
        Oracle
      </NavLink>
      <NavLink className="tab" to="/icons">
        Semiotic Standard
      </NavLink>
      <NavLink className="tab" to="/cdih">
        C-D-I-H (Extended)
      </NavLink>
      <NavLink className="tab" to="/decoder">
        Personal Key Decoding
      </NavLink>
    </div>
  );
};

export default NavMenu;
