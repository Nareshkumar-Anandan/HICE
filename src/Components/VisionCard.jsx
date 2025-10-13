import React from "react";
import "../Styles/VisionCard.css";

const VisionCard = ({ title, description, isVisible, index }) => {
  return (
    <div
      className={`vision-card ${isVisible ? "show" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="vision-card-content">
        <h3 className="vision-card-title">{title}</h3>
        <p className="vision-card-desc">{description}</p>
      </div>
    </div>
  );
};

export default VisionCard;
