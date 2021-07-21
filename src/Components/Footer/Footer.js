import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="pCentrado">
            &copy;{new Date().getFullYear()} Wizard Tech Store | Adrian Matias Marin Brunetti | CoderHouse - Camada: 10250
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
