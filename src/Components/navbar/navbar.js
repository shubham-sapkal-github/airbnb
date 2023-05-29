import React from "react";
import "./navbar.css";
import airbnb_logo from "../../Image/airbnb_logo.svg";

function Header() {
  return (
    <header>
      <img className="logo" src={airbnb_logo} alt="airbnblogo" />
    </header>
  );
}

export default Header;
