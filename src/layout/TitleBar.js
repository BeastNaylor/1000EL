import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./TitleBar.css";

const TitleBar = () => {
  const imageUrl = `${process.env.PUBLIC_URL}/images/logo.jpg`;

  return (
    <div id="titleBar">
      <Navbar color="light" light>
        <div>
          <div className="title">SOLO</div>
          <div className="sub">Solo Operator Lift-Off</div>
          <div className="link">
            see{" "}
            <a href="https://alfredvalley.itch.io/thousand-empty-light" target="_blank">
              Thousand Empty Light Manual of Operation
            </a>
          </div>
        </div>
        <NavbarText>
          <img src={imageUrl} height="40px" />
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default TitleBar;
