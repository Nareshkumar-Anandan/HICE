import React from "react";
import "../Styles/Placements.css";

// Placement Images
import award1 from "../Assets/Placements/Placement1.png";
import award2 from "../Assets/Placements/Placement2.png";
import award3 from "../Assets/Placements/Placement1.png";

// Recruiter Logos
import ashok from "../Assets/recruiters/ashokleyland.png";
import zoho from "../Assets/recruiters/zoho.png";
import tcs from "../Assets/recruiters/tcs.png";
import accenture from "../Assets/recruiters/accenture.png";
import techm from "../Assets/recruiters/techmahindra.png";

const placements = [
  { id: 1, img: award1 },
  { id: 2, img: award2 },
  { id: 3, img: award3 },
  { id: 4, img: award3 },
  { id: 5, img: award3 },
];

const logos = [ashok, zoho, tcs, accenture, techm];

export default function Placements() {
  return (
    <div className="placements-section">
      {/* Heading */}
      <div className="placements-header">
        <div className="header-left">
          <h2><span className="highlights">|</span>PLACEMENTS</h2>
        </div>
        <div className="header-right">
          <p>
            Empowering Students With <br /><span className="highlight-content">Industry Ready Careers</span>
          </p>
        </div>
      </div>

      {/* Placement Cards - Carousel Style */}
      <div className="placements-carousel">
        <div className="carousel-container">
          {placements.map((p, index) => (
            <div
              key={p.id}
              className="carousel-card"
            >
              <div className="card-content">
                <img src={p.img} alt="Placement" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recruiters */}
      <div className="recruiters">
        <div className="logo-slider">
          <h3>Our Top <br />Recruiters</h3>
          <div className="slider-container">
            <div className="logo-track">
              {logos.concat(logos).map((logo, i) => (
                <div className="logo-wrapper" key={i}>
                  <img src={logo} alt="logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}