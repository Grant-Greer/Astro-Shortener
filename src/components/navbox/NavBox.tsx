import React from "react";
import "./navbox.css";

export const NavBox = () => {
  return (
    <div className="navbox-container">
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

      <hr />
      <ul>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <button className="sign-up">Sign Up</button>
        </li>
      </ul>
    </div>
  );
};
