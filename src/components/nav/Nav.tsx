import React from "react";
import { useState } from "react";
import "./nav.css";
import { NavBox } from "../navbox/NavBox";
import { HamburgerIcon } from "../../custom-assets/HamburgerIcon";

export const Nav = () => {
  const [showNavBox, setShowNavBox] = useState(false);

  const handleHamburgerClick = () => {
    setShowNavBox(!showNavBox);
  };

  return (
    <>
      <div id="nav-container">
        <nav>
          <img src="/images/logo.svg" alt="Shortly Logo" />

          <HamburgerIcon onClick={handleHamburgerClick} />

          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="nav-right--desktop">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
        {showNavBox && <NavBox />}
      </div>
    </>
  );
};
