import React, { useEffect, useState } from "react";
import "../Styles/Loader.css";
import logo from "../logo.svg"; // change path if needed

function PremiumLoader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2800); // fade-out after typing ends

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`premium-loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-content">
        <img src={logo} alt="HICE Logo" className="loader-logo" />

        <h2 className="typing-text">
          Loading...<span className="cursor">|</span>
        </h2>
      </div>
    </div>
  );
}

export default PremiumLoader;
