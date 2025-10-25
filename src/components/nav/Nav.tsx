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
          <a href="/">
            <img src="/images/logo.svg" alt="Shortly Logo" />
          </a>

          <HamburgerIcon onClick={handleHamburgerClick} />

          <ul>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
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
