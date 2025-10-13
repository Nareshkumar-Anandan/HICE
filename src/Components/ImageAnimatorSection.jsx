import React, { useEffect, useState } from "react";
import "../Styles/ImageAnimatiorSection.css";
import DecorativeImg from "../Assets/Vector/TrustVector.png";
const DecorativeElement = () => (
  <img
    src={DecorativeImg}
    alt="Decorative Element"
    className="decorative-element"
  />
);

const ImageAnimatorSection = ({ topImage, bottomImage }) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasShadow(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="image-animator-container">
      {/* Top image */}
      <div className={`image-box top ${hasShadow ? "with-shadow" : ""}`}>
        <div
          className="image-slide"
          style={{ backgroundImage: `url(${topImage})` }}
        />
      </div>

      {/* Bottom image */}
      <div className={`image-box bottom ${hasShadow ? "with-shadow" : ""}`}>
        <div
          className="image-slide"
          style={{ backgroundImage: `url(${bottomImage})` }}
        />
      </div>

      <DecorativeElement />
    </div>
  );
};

export default ImageAnimatorSection;
