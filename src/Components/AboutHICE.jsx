import React, { useState } from "react";
import "../Styles/AboutHICE.css";
// Import multiple images
import AboutImg1 from "../Assets/library.jpg";
import AboutImg2 from "../Assets/hostel.jpg";
import AboutImg3 from "../Assets/lab.jpg";
import AboutVectorTop from "../Assets/aboutvector2.png";
import AboutVectorBottom from "../Assets/aboutvector1.png";
const AboutHICE = () => {
  const images = [AboutImg1, AboutImg2, AboutImg3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <section className="about-section">
      <div className="about-vector1">
          <img src={AboutVectorTop} alt="vector" />
        </div>
      {/* Heading */}
      <div className="about-header">
        <h2>
          <span className="highlight">DISCOVER YOUR WINGS</span>
        </h2>
        <p>Hindusthan College, a place for everyone...</p>
      </div>
       

      {/* Content Box */}
      <div className="about-box">
        {/* Left Image */}
        <div className="about-image">
          <img src={images[currentIndex]} alt="About hindusthan " />
        </div>
       
        {/* Right Text Content */}
        <div className="about-text">
          <h3>
            <span className="highlight">OUR HICE FAMILY</span>
          </h3>
          <p>
            The Hindusthan Institute of Commerce and Education (HICE), Ingur Campus, 
            is a part of Hindusthan Educational Institutions, known for its excellence in academics and student development. 
            The campus provides a holistic environment that blends education, innovation, 
            and values. With modern facilities and dedicated faculty,
             HICE ensures students are well-prepared for their future.
          </p>
          <p>
            The campus is located in a peaceful setting at Ingur, fostering discipline,
             creativity, and innovation. It offers career-oriented programs 
             to prepare students for a successful future.
          </p>

          {/* Button */}
          <button className="view-btn">
            View all <span>↗</span>
          </button>
          <div className="about-vector2">
          <img src={AboutVectorBottom} alt="vector" />
        </div>
        </div>
        <div className="about-vector2">
          <img src={AboutVectorBottom} alt="vector" />
        </div>

        {/* Navigation Arrows */}
        <button
          className="nav-arrow left"
          onClick={() => handleArrowClick("left")}
        >
          ←
        </button>
        <button
          className="nav-arrow right"
          onClick={() => handleArrowClick("right")}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default AboutHICE;
