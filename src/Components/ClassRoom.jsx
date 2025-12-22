import React, { useState, useEffect } from 'react';
import { Building2, Users, Monitor, Armchair, Fan } from "lucide-react";
import "../Styles/ClassRoom.css";
import campusBackground from "../Assets/Subtract.png";
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/hospital.jpg';
import RightImage from '../Assets/Vector/Course-vector.png';
import Footer from './Footer';

const images = [LeftImage, LeftImage2, LeftImage, LeftImage];

const ClassRoom = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // ✅ Listen for keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) { // only when modal is open
        if (event.key === "ArrowLeft") {
          showPrev();
        } else if (event.key === "ArrowRight") {
          showNext();
        } else if (event.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const features = [
    { icon: <Building2 size={32} />, title: "Smart Infrastructure" },
    { icon: <Users size={32} />, title: "Interactive Learning" },
    { icon: <Monitor size={32} />, title: "Digital Boards" },
    { icon: <Armchair size={32} />, title: "Comfort Seating" },
    { icon: <Fan size={32} />, title: "Air Conditioned" },
  ];

  return (
    <div className="classroom-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">About Us</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "white" }}>Infrastructure</a> &gt;{" "}
              <a href="/classroom" style={{ textDecoration: "none", color: "#f4b400" }}>ClassRoom</a>
            </div>
            <p className="hero-description">
              If you are passionate and driven, explore our current openings across Hindusthan Institutions and apply.
            </p>
          </div>
        </div>
      </section>

      {/* ClassRoom Section */}
      <section className="why-section">
        <h2 className="why-title" data-aos="fade-up">
          <span className="highlight">|</span> OUR CLASSROOM
        </h2>
        <div className="why-container">
          <div className="why-left" data-aos="fade-right">
            <div className="why-left-top">
              <img src={LeftImage} alt="Why Hindusthan" />
            </div>
            <div className="why-left-bottom">
              <img src={LeftImage2} alt="Why Hindusthan" />
            </div>
            <div className="why-right-bottom">
              <img src={RightImage} alt="Why Hindusthan" />
            </div>
          </div>

          <div className="why-right" data-aos="fade-right">
            <p>
              Hindusthan is known for its strong academic foundation combined with modern infrastructure.
              The institution provides a student-friendly environment where learning goes beyond books and classrooms.
            </p>
            <p>
              The college encourages innovation, research, and skill development through practical exposure.
              With state-of-the-art labs, industry tie-ups, and experienced faculty, students get real-world learning opportunities.
            </p>
            <p>
              Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality.
              The campus life is vibrant, inclusive, and motivating.
            </p>
          </div>
        </div>
      </section>

      {/* ClassRoom Gallery photos */}
      <div className="classroom-photos">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(index)}
            className="photo-thumbnail"
          />
        ))}
      </div>

      <div className="classroom-featcher">
        {/* <h2 className='classroom-heading'><span>|</span>Featchers</h2> */}
        <div className="features-container">
      {features.map((feature, index) => (
        <div key={index} className={`feature-item item-${index + 1}`}>
          <div className="icon">{feature.icon}</div>
          <p>{feature.title}</p>
        </div>
      ))}
    </div>
        <div className="circle-design">
            <h2 className='circle-head'>Space where <br /><span style={{color:"#ffbb00ff"}}>imagination</span> meets innovation</h2>
        </div>
      </div>
      {currentIndex !== null && (
  <div className="modal" onClick={closeModal}>   {/* Click ANYWHERE closes modal */}
    
    <span className="close" onClick={closeModal}>&times;</span>

    {/* Stop propagation so clicking ON the image does NOT close modal */}
    <img
      src={images[currentIndex]}
      alt="Full"
      className="modal-image"
      onClick={(e) => e.stopPropagation()}
    />

    <button
      className="classroom-left"
      onClick={(e) => {
        e.stopPropagation();
        showPrev();
      }}
    >
      &#10094;
    </button>

    <button
      className="classroom-right"
      onClick={(e) => {
        e.stopPropagation();
        showNext();
      }}
    >
      &#10095;
    </button>

  </div>
)}

      <Footer/>
    </div>
  );
};

export default ClassRoom;
