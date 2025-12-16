import React, { useState, useEffect } from 'react';
import { BookOpen, Book, Archive, Search, Users } from "lucide-react";
import "../Styles/Library.css";
import campusBackground from "../Assets/Subtract.png";
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/hospital.jpg';
import RightImage from '../Assets/Vector/Course-vector.png';
import Footer from './Footer';

const images = [LeftImage, LeftImage2, LeftImage, LeftImage];

const Library = () => {
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
    { icon: <BookOpen size={32} />, title: "Reference Collection" },
    { icon: <Book size={32} />, title: "Digital Catalog" },
    { icon: <Archive size={32} />, title: "Journals & Archives" },
    { icon: <Search size={32} />, title: "Research Support" },
    { icon: <Users size={32} />, title: "Quiet Study Zones" },
  ];

  return (
    <div className="library-root">
      {/* Hero Section (UNCHANGED classes/markup) */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Library</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "white" }}>Infrastructure</a> &gt;{" "}
              <a href="/library" style={{ textDecoration: "none", color: "#f4b400" }}>Library</a>
            </div>
            <p className="hero-description">
              Explore our extensive print and digital resources supporting coursework and research.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section (UNCHANGED classes/markup, updated text) */}
      <section className="why-section">
        <h2 className="why-title" data-aos="fade-up">
          <span className="highlight">|</span> OUR LIBRARY
        </h2>
        <div className="why-container">
          <div className="why-left" data-aos="fade-right">
            <div className="why-left-top">
              <img src={LeftImage} alt="Library" />
            </div>
            <div className="why-left-bottom">
              <img src={LeftImage2} alt="Library" />
            </div>
            <div className="why-right-bottom">
              <img src={RightImage} alt="Library" />
            </div>
          </div>

          <div className="why-right" data-aos="fade-right">
            <p>
             Hindusthan’s library is a dynamic learning space built to support academic growth with a wide collection of textbooks, reference materials, and digital resources. It offers accessible study material for both coursework and research needs.
            </p>
            <p>
              Students can enhance their research skills through the digital catalog, librarian guidance, and sessions on literature reviews and citation practices. Comfortable reading areas, group study spaces, and computer access create a supportive environment for focused learning.
            </p>
            <p>
              Beyond book lending, the library hosts workshops, guest lectures, and information literacy programs that help students use information effectively. This nurturing setup promotes lifelong learning and strengthens students’ academic foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery (unique classnames) */}
      <div className="library-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Library ${index + 1}`}
            onClick={() => openModal(index)}
            className="library-photo"
          />
        ))}
      </div>

      {/* Features & decorative circle */}
      <div className="library-feature-block">
        <div className="library-features">
          {features.map((feature, index) => (
            <div key={index} className={`library-feature-item library-item-${index + 1}`}>
              <div className="library-icon">{feature.icon}</div>
              <p className="library-title">{feature.title}</p>
            </div>
          ))}
        </div>

        <div className="library-circle">
          <h2 className="library-circle-head">
            A Calm Place for <br /> <span style={{ color: "#ffbb00ff" }}>Focus</span> and Discovery
          </h2>
        </div>
      </div>

      {/* Modal (unique classnames) */}
      {currentIndex !== null && (
        <div className="library-modal" onClick={closeModal}>
          <span className="library-close" onClick={closeModal}>&times;</span>

          <img
            src={images[currentIndex]}
            alt="Full"
            className="library-modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="library-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </button>

          <button
            className="library-right"
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

export default Library;
