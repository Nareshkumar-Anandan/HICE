import React from "react";
import "../Styles/Highlights.css";
import { FaLightbulb, FaUsers, FaGraduationCap } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";

const Highlights = () => {
  const data = [
    {
      icon: <FaLightbulb />,
      number: "500+",
      text: "Design thinking based projects",
    },
    {
      icon: <BsCheckCircle />,
      number: "3 Crores+",
      text: "Grants from AICTE/DST/ EDII/MSME/DRDO",
    },
    {
      icon: <FaLightbulb />,
      number: "122+",
      text: "industrial ideas submitted for industrial organization",
    },
    {
      icon: <FaGraduationCap />,
      number: "7 Crores",
      text: "HICET Student Scholarship offered",
    },
    {
      icon: <FiTrendingUp />,
      number: "Opportunities",
      text: "for Foreign Internship while studying",
    },
    {
      icon: <FaUsers />,
      number: "33+",
      text: "FOREIGN University collaborations",
    },
  ];

  return (
    <section className="hice-highlights-section">
      <div className="hice-hind-header">
        <h1><span className="highlight">|</span>HINDUSTAN HIGHLIGHTS</h1>
      </div>

      <div className="hice-highlights-grid">
        {data.map((item, index) => (
          <div className="hice-highlight-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h2>{item.number}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
