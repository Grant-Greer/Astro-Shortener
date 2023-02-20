import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img
            src="/images/logo-white.svg"
            className="footer-logo"
            alt="Shortly Logo"
          />
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="footer-link">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-link">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="social-container">
          <img src="/images/icon-facebook.svg" alt="Facebook Icon" />
          <img src="/images/icon-twitter.svg" alt="Twitter Icon" />
          <img src="/images/icon-pinterest.svg" alt="Pinterest Icon" />
          <img src="/images/icon-instagram.svg" alt="Instagram Icon" />
        </div>
      </div>
    </footer>
  );
};
