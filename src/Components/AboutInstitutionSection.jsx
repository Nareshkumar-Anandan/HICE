import React, { useState, useEffect, useRef} from "react";
import { useInView } from "react-intersection-observer";
import '../Styles/AboutInstitutionSection.css';
import campusBackground from "../Assets/Subtract.png";
import LeftImage from "../Assets/hospital.jpg";
import LeftImage2 from '../Assets/hostel.jpg';
import img1 from "../Assets/hospital.jpg";
import img2 from '../Assets/hostel.jpg';
import PhotoGalleryLayoutBackground from "./PhotoGalleryLayoutBackground";
import "../Styles/EvaluationOfCampus.css";
import HiceImg from "../Assets/lab.jpg";
import HiceVector from "../Assets/vectorEvent.png";
import SectionTitle from "./Title";
import CampusImagesSection from "./CampusImagesSection.jsx";
import Footer from "./Footer.jsx";
import RightImage from "../Assets/Vector.png";
import crown from "../Assets/Vector/Crown.png";
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

  const milestonesData = [
  {
    year: "1998:",
    text: "Founded with an intake of 144 students, HICAS has grown to accommodate over 9,300 students annually across various academic programs.",
  },
  {
    year: "2015:",
    text: "Achieved autonomous status, allowing the institution to design its own curriculum and conduct examinations independently, while still awarding degrees conferred by Bharathiar University.",
  },
  {
    year: "2021:",
    text: "Launched the Hindusthan International Research Academy (HIRA), a significant milestone in fostering research and innovation.",
  },
  {
    year: "2024:",
    text: "Organized a Faculty Development Programme on Emotional Intelligence and Resiliency in Higher Education, emphasizing the institution's commitment to faculty development.",
  },
];

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
     {/* Courses Section */}
      <div className="courses-container">
        <div className="courses-card">
          <h3>Our Mission</h3>
          <ul>
            <li>
             To provide quality education and foster an environment of intellectual growth, ethical values, 
             and social responsibility, empowering students to become leaders and innovators in a global society.
            </li>
          </ul>
        </div>
        <div className="courses-card">
          <h3>Academic Excellence</h3>
          <ul>
            <li>
              Committed to the highest standards of teaching and research, we offer a 
              diverse range of programs that encourage critical thinking, creativity, and a passion for lifelong learning.
            </li>
    
          </ul>
        </div>
        <div className="courses-card">
          <h3>Course Duration And Intake</h3>
          <ul>
            <li>3 Years</li>
            <li>180 Intakes</li>
          </ul>
        </div>
        <div className="courses-card">
          <h3>Industry Recognition</h3>
          <ul>
            <li>
              Our BCA course is recognised by DBT Star college scheme. We also
              have an Industry Integrated Course with GOOGLE Technologies.
            </li>
          </ul>
        </div>
        <div className="courses-center-icon">
          <span>
            <img src={crown} alt="Crown" />
          </span>
        </div>
      </div>
     <section className="evaluation-section">
      <SectionTitle
        text={"Hindusthan college of engineering,"}
        nextLineText={"Ingur"}
      />
      <section className="evaluation-content">
        <div className="evaluation-flex">
          <div className="evaluation-image-container">
            <div className="decorative-img-wrapper">
              <img
                src={HiceVector}
                alt="Decorative background elements"
                className="decorative-img"
              />
            </div>

           <div className="image-place">
             <img src={HiceImg} alt="HICE" className="placeholder-img" />
           </div>
          </div>

          <div className="evaluation-text">
            <ul className="milestones-list">
              {milestonesData.map((item, index) => (
                <li key={index} className="milestone-item">
                  <strong className="milestone-year">{item.year}</strong>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="evaluation-bg">
        <PhotoGalleryLayoutBackground />
      </div>
    </section>
    <CampusImagesSection/>
    <Footer/>
    </div>
  );
};

export default AboutInstitutionSection;
