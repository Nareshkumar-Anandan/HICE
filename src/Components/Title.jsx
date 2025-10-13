import React, { useRef, useEffect, useState } from "react";
import "../Styles/Title.css";

export default function Title({ text, nextLineText, line = true }) {
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsTitleVisible(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="title-container" ref={titleRef}>
      <h2 className={`title-heading ${isTitleVisible ? "show" : "hide"}`}>
        {line ? (
          <span className="title-with-line">{text[0]}</span>
        ) : (
          <span>{text[0]}</span>
        )}
        {text.slice(1)}
        {nextLineText && (
          <>
            <br />
            {nextLineText}
          </>
        )}
      </h2>
    </div>
  );
}
