import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "./Title";
import ShowClickedImage from "./ShowClickedImage";
import ImageBox from "./ImageBox";
import "../Styles/CampusImagesSection.css";
import img1 from "../Assets/lab.jpg"
const imageSources = [
  img1,img1,img1,img1,img1,img1,
];

const CAROUSEL_SETTINGS = {
  scrollInterval: 3000,
  itemsPerViewLG: 3,
  itemsPerViewMD: 2,
  itemsPerViewSM: 1,
  breakpointMD: 768,
  breakpointLG: 1024,
};

const CampusImagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(CAROUSEL_SETTINGS.itemsPerViewLG);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);
  const totalItems = imageSources.length;

  const loopedImageSources = [...imageSources, ...imageSources.slice(0, itemsPerView)];

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

      {selectedImage && (
        <ShowClickedImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default CampusImagesSection;
