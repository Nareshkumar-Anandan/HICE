import React from "react";
import "../Styles/ImageBox.css";

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

export default ImageBox;
