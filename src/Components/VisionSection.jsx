import React from "react";
import { useInView } from "./Hooks/useInView";
import VisionCard from "./VisionCard";
import "../Styles/VisionSection.css"; // import CSS file
import CrownImg from "../Assets/Vector/Crown.png";
const VisionSection = () => {
  const [sectionRef, isSectionVisible] = useInView({ threshold: 0.25 });

  const cardData = [
    {
      title: "Our Mission",
      description:
        "To provide quality education and foster an environment of intellectual growth, ethical values, and social responsibility, empowering students to become leaders and innovators in a global society.",
    },
    {
      title: "Academic Excellence",
      description:
        "Committed to the highest standards of teaching and research, we offer a diverse range of programs that encourage critical thinking, creativity, and a passion for lifelong learning.",
    },
    {
      title: "Community Engagement",
      description:
        "We actively engage with our community through service-learning projects, partnerships, and outreach programs that address social needs and contribute to the well-being of the region.",
    },
    {
      title: "Global Perspective",
      description:
        "Dedicated to preparing students for a connected world by promoting cultural understanding, international collaborations, and opportunities for global exposure and exchange.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`vision-section ${isSectionVisible ? "visible" : ""}`}
    >
      <div className="vision-grid">
        {cardData.map((data, index) => (
          <VisionCard
            key={index}
            title={data.title}
            description={data.description}
            isVisible={isSectionVisible}
            index={index}
          />
        ))}
      </div>

      <div className={`vision-crown ${isSectionVisible ? "show" : ""}`}>
        <div className="animated-border-circle">
          <img
            src={CrownImg}
            alt="Crown"
            className="crown-img"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
