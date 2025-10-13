import React from "react";
import "../Styles/PhotoGalleryLayoutBackground.css";

const PhotoGalleryLayoutBackground = () => {
  return (
    <div className="pg-background-wrapper">
      <div className="pg-perspective-container">
        <div className="pg-rotated-container">
          {/* Left Column */}
          <div className="pg-column pg-column-left">
            <div className="pg-box"></div>
            <div className="pg-box"></div>
          </div>

          {/* Center Column */}
          <div className="pg-column pg-column-center">
            <div className="pg-box"></div>
            <div className="pg-box"></div>
            <div className="pg-box"></div>
          </div>

          {/* Right Column */}
          <div className="pg-column pg-column-right">
            <div className="pg-box"></div>
            <div className="pg-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryLayoutBackground;
