import React, { useEffect, useState } from "react";
import "../Styles/Loader.css";
import logo from "../logo.svg";

function PremiumLoader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setFadeOut(true); // Fade out loader when everything is loaded
    };

    // If the page is already fully loaded (cache, fast load)
    if (document.readyState === "complete") {
      setFadeOut(true);
    } else {
      // Listen for the load event
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
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
