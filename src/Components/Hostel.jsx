import React, { useState, useEffect } from 'react';
import { Home, Bed, Users, Armchair, Shield } from "lucide-react";
import "../Styles/Hostel.css";
import campusBackground from "../Assets/Subtract.png";
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/hospital.jpg';
import RightImage from '../Assets/Vector/Course-vector.png';
import Footer from './Footer';

const images = [LeftImage, LeftImage2, LeftImage, LeftImage];

const Hostel = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) {
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
    { icon: <Home size={32} />, title: "Secure Premises" },
    { icon: <Bed size={32} />, title: "Comfortable Rooms" },
    { icon: <Users size={32} />, title: "24/7 Support" },
    { icon: <Armchair size={32} />, title: "Common Lounges" },
    { icon: <Shield size={32} />, title: "Safety & Security" },
  ];

  return (
    <div className="hostel-root">
      {/* Hero Section (UNCHANGED) */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Hostel</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "white" }}>Infrastructure</a> &gt;{" "}
              <a href="/hostel" style={{ textDecoration: "none", color: "#f4b400" }}>Hostel</a>
            </div>
            <p className="hero-description">
              Safe and comfortable on-campus accommodation for students with round-the-clock support.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section (UNCHANGED classes/markup, updated text) */}
      <section className="why-section">
        <h2 className="why-title" data-aos="fade-up">
          <span className="highlight">|</span> OUR HOSTEL
        </h2>
        <div className="why-container">
          <div className="why-left" data-aos="fade-right">
            <div className="why-left-top">
              <img src={LeftImage} alt="Hostel" />
            </div>
            <div className="why-left-bottom">
              <img src={LeftImage2} alt="Hostel" />
            </div>
            <div className="why-right-bottom">
              <img src={RightImage} alt="Hostel" />
            </div>
          </div>

          <div className="why-right" data-aos="fade-right">
            <p>
              Hindusthan provides comfortable and well-maintained hostel accommodation that supports student life on campus. Rooms are designed for study and rest, with regular housekeeping and essential amenities to ensure a hassle-free stay.
            </p>
            <p>
              The hostels are managed with student safety and wellbeing in mind—wardens, security staff and medical support are available 24/7. Common lounges and recreational spaces foster friendships and community activities among residents.
            </p>
            <p>
              Living on campus also encourages personal growth and independence: regular resident programs, peer mentoring and events create a supportive environment where students can balance academics, social life, and self-care.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="hostel-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Hostel ${index + 1}`}
            onClick={() => openModal(index)}
            className="hostel-photo"
          />
        ))}
      </div>

      {/* Features */}
      <div className="hostel-feature-block">
        <div className="hostel-features">
          {features.map((feature, index) => (
            <div key={index} className={`hostel-feature-item hostel-item-${index + 1}`}>
              <div className="hostel-icon">{feature.icon}</div>
              <p className="hostel-title">{feature.title}</p>
            </div>
          ))}
        </div>

        <div className="hostel-circle">
          <h2 className="hostel-circle-head">
            A Home Away from <br /> <span style={{ color: "#ffbb00ff" }}>Home</span>
          </h2>
        </div>
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="hostel-modal" onClick={closeModal}>
          <span className="hostel-close" onClick={closeModal}>&times;</span>

          <img
            src={images[currentIndex]}
            alt="Full"
            className="hostel-modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="hostel-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </button>

          <button
            className="hostel-right"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &#10095;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Hostel;
