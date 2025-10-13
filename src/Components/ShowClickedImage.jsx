import React from "react";
import "../Styles/ShowClickedImage.css";

const ShowClickedImage = ({ selectedImage, setSelectedImage }) => {
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal} title="Click anywhere to close">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage} alt="Full screen view" className="modal-img" />
      </div>
    </div>
  );
};

export default ShowClickedImage;
