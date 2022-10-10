import React from "react";
import NavMenu from "./NavMenu";
import TitleBar from "./TitleBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TitleBar />
      <NavMenu />
      {children}
    </div>
  );
};

export default Layout;
