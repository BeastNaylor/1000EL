import React from "react";
import NavMenu from "./NavMenu";
import TitleBar from "./TitleBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TitleBar />
      <NavMenu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
