import React, { useState, useEffect, useRef } from "react";
import '../Styles/AboutInstitutionSection.css';
import campusBackground from "../Assets/Subtract.png";
import LeftImage from "../Assets/hospital.jpg";
import LeftImage2 from '../Assets/hostel.jpg';
import img1 from "../Assets/hospital.jpg";
import img2 from '../Assets/hostel.jpg';
import VisionSection from "./VisionSection.jsx";
import EvaluationOfCampus from "./EvaluationOfCampus.jsx";
import CampusImagesSection from "./CampusImagesSection.jsx";
import Footer from "./Footer.jsx";
import RightImage from "../Assets/Vector.png"
const IMAGE_LIST = [
   img1,
   img2,
   img1,
   img2
];
const ANIMATION_INTERVAL = 5000; // 5 seconds

const AboutInstitutionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textContentRef = useRef(null);
  const [isTextContentVisible, setIsTextContentVisible] = useState(false);

  useEffect(() => {
    // image rotation
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGE_LIST.length);
    }, ANIMATION_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // intersection observer for text animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsTextContentVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (textContentRef.current) observer.observe(textContentRef.current);
    return () => observer.disconnect();
  }, []);

  const topImage = IMAGE_LIST[currentIndex];
  const bottomImage =
    IMAGE_LIST[(currentIndex - 1 + IMAGE_LIST.length) % IMAGE_LIST.length];

  return (
    <div>

        {/* Hero Section */}
                    <section className="hero-section">
                      <div className="hero-background">
                        <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                      </div>
              
                      <div className="hero-content">
              
                        {/* Hero Text */}
                        <div className="hero-text">
                          <h1 className="hero-title">Our Trustee</h1>
                          <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>About Us</a> &gt; <a href="/aboutHice" style={{ textDecoration:"none", color:"#f4b400"}}>About HICE</a></div>
                          <p className="hero-description">
                            If you are passionate and driven, explore our current openings across
                            Hindusthan Institutions and apply.
                          </p>
                        </div>
                      </div>
                    </section>
      <section className="why-section">
             <h2 className="why-title"  data-aos="fade-up">
                <span className="highlight">|</span> ABOUT HICE
              </h2>
          <div className="why-container">
            {/* Left Side Image */}
            <div className="why-left" data-aos="fade-right">
              <div className="why-left-top">
              <img src={LeftImage} alt="Why Hindusthan" /></div>
              <div className="why-left-bottom">
              <img src={LeftImage2} alt="Why Hindusthan" /></div>
              <div className="why-right-bottom">
              <img src={RightImage} alt="Why Hindusthan" /></div>
            </div>
    
            {/* Right Side Content */}
            <div className="why-right" data-aos="fade-right">
             
              <p>
               Hindusthan is known for its strong academic foundation combined with modern infrastructure. 
               The institution provides a student-friendly environment where learning goes beyond books and classrooms.
              </p>
              <p>
               The college encourages innovation, research, and skill development 
               through practical exposure. With state-of-the-art labs, industry tie-ups, and
                experienced faculty, students get real-world learning opportunities.
                This prepares them to face global challenges with the right skills.
              </p>
              <p>Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                The campus life is vibrant, inclusive, and motivating, making students 
                feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.</p>
            </div>
          </div>
        </section>
    <VisionSection/>
    <EvaluationOfCampus/>
    <CampusImagesSection/>
    <Footer/>
    </div>
  );
};

export default AboutInstitutionSection;
