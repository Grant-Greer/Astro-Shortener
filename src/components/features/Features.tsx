import React from "react";
import "./features.css";

export const Features = () => {
  return (
    <section className="features">
      <div className="feature-intro">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing</p>
        <span>across the web with our advanced</span>
        <span>statistics dashboard.</span>
      </div>
      <div className="card-container">
        <div className="feature-card">
          <div className="feature-card-circle">
            <img
              src="./images/icon-brand-recognition.svg"
              alt="Brand Recognition"
            />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-card-circle">
            <img
              src="./images/icon-detailed-records.svg"
              alt="Detailed Records"
            />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-card-circle">
            <img
              src="./images/icon-fully-customizable.svg"
              alt="Customizable"
            />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
        <div className="cyan-bar" />
      </div>
    </section>
  );
};
