import React from "react";
import "./header.css";
import { Nav } from "../nav/Nav";
export const Header = () => {
  return (
    <header>
      <Nav />
      <div className="hero">
        <img
          src="./images/illustration-working.svg"
          alt="woman working at desk"
          className="working-img"
        />
        <div className="intro">
          <h2>More than just</h2>
          <h2>shorter links</h2>
          <p>Build your Brands recognition and</p>
          <span>get detailed insights on how your</span>
          <span>links are performing.</span>
          <button className="start-button">Get Started</button>
        </div>
      </div>
    </header>
  );
};
