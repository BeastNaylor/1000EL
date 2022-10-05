import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const TitleBar = () => {
  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand>
          <div>SOLO</div>
          <div>Solo Operator Lift-Off</div>
        </NavbarBrand>
        <NavbarText>MothershipLogoHere</NavbarText>
      </Navbar>
    </div>
  );
};

export default TitleBar;
