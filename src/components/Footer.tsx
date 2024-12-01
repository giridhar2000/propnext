import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="social-icons">
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Property</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <p>©2024 PropNextIndia | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
