import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingCart, Users, Utensils } from "lucide-react";
import "../Styles/Canteen.css";
import campusBackground from "../Assets/Subtract.png";
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/hospital.jpg';
import RightImage from '../Assets/Vector/Course-vector.png';
import Footer from './Footer';

const images = [LeftImage, LeftImage2, LeftImage, LeftImage];

const Canteen = () => {
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
    { icon: <Coffee size={32} />, title: "Fresh & Hygienic" },
    { icon: <ShoppingCart size={32} />, title: "Varied Menu" },
    { icon: <Users size={32} />, title: "Seating & Takeaway" },
    { icon: <Utensils size={32} />, title: "Healthy Options" },
    { icon: <Users size={32} />, title: "Affordable Meals" },
  ];

  return (
    <div className="canteen-root">
      {/* Hero Section (UNCHANGED) */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Canteen</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "white" }}>Infrastructure</a> &gt;{" "}
              <a href="/canteen" style={{ textDecoration: "none", color: "#f4b400" }}>Canteen</a>
            </div>
            <p className="hero-description">
              Nutritious and tasty meals prepared hygienically — options for all dietary needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section (UNCHANGED classes/markup, updated text) */}
      <section className="why-section">
        <h2 className="why-title" data-aos="fade-up">
          <span className="highlight">|</span> OUR CANTEEN
        </h2>
        <div className="why-container">
          <div className="why-left" data-aos="fade-right">
            <div className="why-left-top">
              <img src={LeftImage} alt="Canteen" />
            </div>
            <div className="why-left-bottom">
              <img src={LeftImage2} alt="Canteen" />
            </div>
            <div className="why-right-bottom">
              <img src={RightImage} alt="Canteen" />
            </div>
          </div>

          <div className="why-right" data-aos="fade-right">
            <p>
              Hindusthan’s canteen serves nutritious and tasty meals catering to diverse tastes and dietary needs. Emphasis on hygiene and food safety ensures that students and staff receive wholesome meals prepared under strict cleanliness standards.
            </p>
            <p>
              The canteen offers a varied menu with affordable meal plans, quick serving lines for busy schedules, and spaces for social dining. Seasonal menus, healthy options and beverage counters make it a convenient spot for study breaks and group meals.
            </p>
            <p>
              Regular quality checks, vendor audits and feedback channels keep food standards high while encouraging local and healthy cuisine choices. The canteen supports campus wellbeing by combining nourishment, convenience and community dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="canteen-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Canteen ${index + 1}`}
            onClick={() => openModal(index)}
            className="canteen-photo"
          />
        ))}
      </div>

      {/* Features */}
      <div className="canteen-feature-block">
        <div className="canteen-features">
          {features.map((feature, index) => (
            <div key={index} className={`canteen-feature-item canteen-item-${index + 1}`}>
              <div className="canteen-icon">{feature.icon}</div>
              <p className="canteen-title">{feature.title}</p>
            </div>
          ))}
        </div>

        <div className="canteen-circle">
          <h2 className="canteen-circle-head">
            Good food for a <br /> <span style={{ color: "#ffbb00ff" }}>Healthy</span> Campus Life
          </h2>
        </div>
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="canteen-modal" onClick={closeModal}>
          <span className="canteen-close" onClick={closeModal}>&times;</span>

          <img
            src={images[currentIndex]}
            alt="Full"
            className="canteen-modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="canteen-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </button>

          <button
            className="canteen-right"
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

export default Canteen;
