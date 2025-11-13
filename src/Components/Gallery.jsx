import React, { useState, useEffect } from "react";
import "../Styles/Gallery.css";
import campusBackground from "../Assets/Subtract.png";
import youngImg from "../Assets/hospital.jpg";
import youngImg2 from "../Assets/library.jpg";
import portraitImg from "../Assets/hospital.jpg";
import portraitImg2 from "../Assets/library.jpg";
import Footer from "./Footer";

const Gallery = () => {
  const images = [
    { src: youngImg, caption: "Transport" },
    { src: youngImg2, caption: "Library" },
    { src: portraitImg, caption: "Lab" },
    { src: portraitImg2, caption: "Classroom" },
    { src: youngImg, caption: "Computer Lab" },
    { src: youngImg2, caption: "Other Facilities" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // ✅ Keyboard navigation (left/right/escape)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) {
        if (event.key === "ArrowLeft") showPrev();
        else if (event.key === "ArrowRight") showNext();
        else if (event.key === "Escape") closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={campusBackground}
            alt="Campus Background"
            className="hero-bg-image"
          />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Our Gallery</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </a>{" "}
              &gt;{" "}
              <a
                href="/aboutTrust"
                style={{ textDecoration: "none", color: "#f4b400" }}
              >
                Gallery
              </a>
            </div>
            <p className="hero-description">
              Explore glimpses of Hindusthan — where learning and innovation
              thrive in every corner.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="gallery-container">
        <h1 className="gallery-title">Gallery</h1>
        <div className="image-grid">
          {images.map((img, index) => (
            <div className="image-card" key={index}>
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                onClick={() => openModal(index)}
                className="gallery-image"
              />
              <p className="caption">
                <em>{img.caption}</em>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {currentIndex !== null && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={images[currentIndex].src}
            alt="Full View"
            className="modal-image"
          />
          <p className="modal-caption">{images[currentIndex].caption}</p>
          <button className="gallery-left" onClick={showPrev}>
            &#10094;
          </button>
          <button className="gallery-right" onClick={showNext}>
            &#10095;
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
