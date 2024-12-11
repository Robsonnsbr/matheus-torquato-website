import React from "react";
// import "./style/contentHeader.css";
import ContainerMedium from "../common/container/ContainerMedium";

function Header() {
  return (
    <header
      className="global-height-header class-header bg-accent"
      id="top-header"
    >
      <ContainerMedium id="container-header">
        <div className="contentHeader">
          <h1 className="flex items-center justify-center font-extrabold text-4xl">
            HEADER
          </h1>
        </div>
      </ContainerMedium>
    </header>
  );
}

export default Header;
