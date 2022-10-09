import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./TitleBar.css";

const TitleBar = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/logo.jpg`;

  return (
    <div id="titleBar">
      <Navbar color="light" light>
        <NavbarBrand>
          <div className="title">SOLO</div>
          <div className="sub">Solo Operator Lift-Off</div>
        </NavbarBrand>
        <NavbarText>
          <img src={imageUrl} height="40px" />
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default TitleBar;
