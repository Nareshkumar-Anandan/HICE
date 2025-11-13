import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "./Title";
import "../Styles/CampusImagesSection.css";
import img1 from "../Assets/lab.jpg";

const imageSources = [img1, img1, img1, img1, img1, img1];

const CAROUSEL_SETTINGS = {
  scrollInterval: 3000,
  itemsPerViewLG: 3,
  itemsPerViewMD: 2,
  itemsPerViewSM: 1,
  breakpointMD: 768,
  breakpointLG: 1024,
};

// ✅ Combined Main Component
const CampusImagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(CAROUSEL_SETTINGS.itemsPerViewLG);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const totalItems = imageSources.length;

  const loopedImageSources = [...imageSources, ...imageSources.slice(0, itemsPerView)];

  // Responsive Items Per View
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < CAROUSEL_SETTINGS.breakpointMD) {
        setItemsPerView(CAROUSEL_SETTINGS.itemsPerViewSM);
      } else if (window.innerWidth < CAROUSEL_SETTINGS.breakpointLG) {
        setItemsPerView(CAROUSEL_SETTINGS.itemsPerViewMD);
      } else {
        setItemsPerView(CAROUSEL_SETTINGS.itemsPerViewLG);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Auto Carousel Loop
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (totalItems > itemsPerView && !selectedImage) {
      timeoutRef.current = setTimeout(() => {
        if (currentIndex >= totalItems) {
          setIsTransitioning(false);
          setCurrentIndex(0);
          setTimeout(() => setIsTransitioning(true), 50);
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, CAROUSEL_SETTINGS.scrollInterval);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, itemsPerView, totalItems, selectedImage]);

  return (
    <div className="campus-section">
      <div className="section-title-wrapper">
        <SectionTitle text="Campus" />
      </div>

      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
            }}
          >
            <ImageBox
              imageSources={loopedImageSources}
              setSelectedImage={setSelectedImage}
              itemsPerView={itemsPerView}
            />
          </div>
        </div>
      </div>

      {/* Modal for clicked image */}
      {selectedImage && (
        <ShowClickedImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

// ✅ Inner Component 1: Image Box
const ImageBox = ({ imageSources, setSelectedImage, itemsPerView }) => {
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <>
      {imageSources.map((src, index) => (
        <div
          key={index}
          className="image-box-container"
          style={{ width: `${100 / itemsPerView}%` }}
        >
          <div className="image-box-inner">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="image-box-img"
              onClick={() => handleImageClick(src)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

// ✅ Inner Component 2: Modal for Clicked Image
const ShowClickedImage = ({ selectedImage, setSelectedImage }) => {
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleCloseModal}
      title="Click anywhere to close"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage} alt="Full screen view" className="modal-img" />
      </div>
    </div>
  );
};

export default CampusImagesSection;
