import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="tabs-container">
      <NavLink className="tab" end to="/">
        ORACLE
      </NavLink>
      <NavLink className="tab" to="/icons">
        SEMIOTIC STANDARD
      </NavLink>
      <NavLink className="tab" to="/cdih">
        C-D-I-H (EXTENDED)
      </NavLink>
      <NavLink className="tab" to="/decoder">
        PERSONAL KEY DECODING
      </NavLink>
    </div>
  );
};

export default NavMenu;
