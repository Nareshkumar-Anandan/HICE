import React from "react";
import SectionTitle from "./Title";
import PhotoGalleryLayoutBackground from "./PhotoGalleryLayoutBackground";
import "../Styles/EvaluationOfCampus.css";
import HiceImg from "../Assets/lab.jpg";
import HiceVector from "../Assets/vectorEvent.png";
const milestonesData = [
  {
    year: "1998:",
    text: "Founded with an intake of 144 students, HICAS has grown to accommodate over 9,300 students annually across various academic programs.",
  },
  {
    year: "2015:",
    text: "Achieved autonomous status, allowing the institution to design its own curriculum and conduct examinations independently, while still awarding degrees conferred by Bharathiar University.",
  },
  {
    year: "2021:",
    text: "Launched the Hindusthan International Research Academy (HIRA), a significant milestone in fostering research and innovation.",
  },
  {
    year: "2024:",
    text: "Organized a Faculty Development Programme on Emotional Intelligence and Resiliency in Higher Education, emphasizing the institution's commitment to faculty development.",
  },
];


const EvaluationOfCampus = () => {
  return (
    <section className="evaluation-section">
      <SectionTitle
        text={"Hindusthan college of engineering,"}
        nextLineText={"Ingur"}
      />
      <section className="evaluation-content">
        <div className="evaluation-flex">
          <div className="evaluation-image-container">
            <div className="decorative-img-wrapper">
              <img
                src=""
                alt="Decorative background elements"
                className="decorative-img"
              />
            </div>

           <div className="image-place">
             <img src={HiceImg} alt="HICE" className="placeholder-img" />
           </div>
          </div>

          <div className="evaluation-text">
            <ul className="milestones-list">
              {milestonesData.map((item, index) => (
                <li key={index} className="milestone-item">
                  <strong className="milestone-year">{item.year}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="evaluation-bg">
        <PhotoGalleryLayoutBackground />
      </div>
    </section>
  );
};

export default EvaluationOfCampus;
