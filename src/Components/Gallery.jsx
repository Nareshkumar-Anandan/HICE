import React from 'react';
import '../Styles/Gallery.css'; // Ensure you have the correct path to your CSS file
import campusBackground from '../Assets/Subtract.png';
import youngImg from '../Assets/hospital.jpg';
import youngImg2 from '../Assets/library.jpg';
import portraitImg from '../Assets/hospital.jpg';
import portraitImg2 from '../Assets/library.jpg';
import Footer from './Footer'; // Import Footer component
const Gallery = () => {
  const images = [
    {
      src: youngImg,
      caption: 'Transport'
    },
    {
      src: youngImg2,
      caption: 'Library'
    },
    {
      src: portraitImg,
      caption: 'Lab'
    },
    {
      src: portraitImg2,
      caption: 'Classroom'
    },
    {
      src: youngImg,
      caption: 'Computer Lab'
    },
    {
      src: youngImg2,
      caption: 'Other Facilities'
    },
  ];

  return (
    <>
    <section className="hero-section">
                 <div className="hero-background">
                   <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                 </div>
         
                 <div className="hero-content">
         
                   {/* Hero Text */}
                   <div className="hero-text">
                     <h1 className="hero-title">Our Gallery</h1>
                     <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a>
                     {" "}
                 &gt;{" "}
                 <a href="/aboutTrust" style={{ textDecoration: "none", color: "#f4b400" }}>
                   Gallery
                 </a></div>
                     <p className="hero-description">
                       If you are passionate and driven, explore our current openings across
                       Hindusthan Institutions and apply.
                     </p>
                   </div>
                 </div>
               </section>
    <div className="gallery-container">
      <h1 className="gallery-title"> Gallery</h1>
      <div className="image-grid">
        {images.map((img, index) => (
          <div className="image-card" key={index}>
            <img src={img.src} alt={img.caption} />
            <p className="caption"><em>{img.caption}</em></p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Gallery;
