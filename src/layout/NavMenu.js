import React from "react";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div class="tabs-container">
      <div class="tab">
        <Link to="oracle">Oracle</Link>
      </div>
      <div class="tab">
        <Link to="icons">Semiotic Standard</Link>
      </div>
      <div class="tab">
        <Link to="cdih">C-D-I-H (Extended)</Link>
      </div>
      <div class="tab">
        <Link to="decoder">Personal Key Decoding</Link>
      </div>
    </div>
  );
};

export default NavMenu;
