import React, { useState, useEffect, useRef } from 'react';
import '../Styles/WhyHindusthan.css';
import campusBackground from '../Assets/Subtract.png';
import Footer from './Footer';
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/lab.jpg';
import DroneImage from '../Assets/WhyHindusthanAssets/drone.png';
import s3dImage from '../Assets/WhyHindusthanAssets/3d.png';
import aicteImage from '../Assets/WhyHindusthanAssets/aictelab.png';
import youthImage from '../Assets/WhyHindusthanAssets/youth.jpg';
import RobotImage from '../Assets/WhyHindusthanAssets/robot.png';
import AcademicImg from '../Assets/WhyHindusthanAssets/academic.png';
import IndustryImg from '../Assets/WhyHindusthanAssets/industry.png';
import studentImg from '../Assets/WhyHindusthanAssets/student.png';
import ResearchImg from '../Assets/WhyHindusthanAssets/research.png';
import DiversityImg from '../Assets/WhyHindusthanAssets/diversity.png';
import ashok from "../Assets/recruiters/ashokleyland.png";
import zoho from "../Assets/recruiters/zoho.png";
import tcs from "../Assets/recruiters/tcs.png";
import accenture from "../Assets/recruiters/accenture.png";
import techm from "../Assets/recruiters/techmahindra.png";

const Why = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(2);
  const [countersStarted, setCountersStarted] = useState(false);
  const countersRef = useRef(null);
  
  const logos = [ashok, zoho, tcs, accenture, techm];

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }
    return () => observer.disconnect();
  }, [countersStarted]);

  const useCountUp = (end, duration = 3500, start = 0) => {
    const [count, setCount] = useState(start);
    useEffect(() => {
      if (!countersStarted) return;
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [countersStarted, end, duration, start]);
    return count;
  };

  const excellenceCenters = [
    { title: 'Drone Technology', image: DroneImage, description: 'Advanced UAV systems and applications' },
    { title: 'Robotics', image: RobotImage, description: 'Cutting-edge robotic solutions' },
    { title: '3D Printing Technology', image: s3dImage, description: 'Additive manufacturing excellence' },
    { title: 'AICTE Idea Lab', image: aicteImage, description: 'Innovation and entrepreneurship hub' },
    { title: 'Youth Empowerment', image: youthImage, description: 'Developing future leaders' }
  ];

  const greatnessFeatures = [
    { image: AcademicImg, title: 'Academic Excellence' },
    { image: IndustryImg, title: 'Industry Collaborations' },
    { image: studentImg, title: 'Student Support Services' },
    { image: ResearchImg, title: 'Research Opportunities' },
    { image: DiversityImg, title: 'Diversity and Inclusivity' }
  ];

  const achievements = [
    { number: useCountUp(30), label: 'Years of Empowering Young Minds' },
    { number: useCountUp(25), label: 'International collaboration' },
    { number: useCountUp(75), label: 'Start ups' },
    { number: useCountUp(20), label: 'Crore students scholarships offered' },
    { number: useCountUp(50), label: 'Industrial Ideas submitted for industrial organization' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hh-hero-section">
        <div className="hh-hero-background">
          <img src={campusBackground} alt="Campus Background" className="hh-hero-bg-image" />
        </div>
        <div className="hh-hero-content">
          <div className="hh-hero-text">
            <h1 className="hh-hero-title">Our Institutions</h1>
            <div className="hh-breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a>{" "}
              &gt;{" "}
              <a href="/about-us" style={{ textDecoration: "none", color: "white" }}>Academics</a>{" "}
              &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "#f4b400" }}>Our Institutions</a>
            </div>
            <p className="hh-hero-description">
              If you are passionate and driven, explore our current openings across Hindusthan Institutions and apply.
            </p>
          </div>
        </div>
      </section>

      <div className="hh-why-page">
        <div className="hh-why-hindusthan-container">
          
          {/* Why Hindusthan Section */}
          <section className="hh-why-section">
            <h2 className="hh-why-title" data-aos="fade-up">
               WHY HINDUSTHAN&nbsp;?
            </h2>
            <div className="hh-why-container">
              {/* Left Side Image - Overlap preserved via CSS */}
              <div className="hh-why-left" data-aos="fade-right">
                <div className="hh-why-left-top">
                  <img src={LeftImage} alt="Why Hindusthan" />
                </div>
                <div className="hh-why-left-bottom">
                  <img src={LeftImage2} alt="Why Hindusthan" />
                </div>
              </div>

              {/* Right Side Content */}
              <div className="hh-why-right" data-aos="fade-right">
                <p>
                  Hindusthan is known for its strong academic foundation combined with modern infrastructure.
                  The institution provides a student-friendly environment where learning goes beyond books and classrooms.
                </p>
                <p>
                  The college encourages innovation, research, and skill development through practical exposure. 
                  With state-of-the-art labs, industry tie-ups, and experienced faculty, students get real-world 
                  learning opportunities. This prepares them to face global challenges with the right skills.
                </p>
                <p>
                  Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape 
                  overall personality. The campus life is vibrant, inclusive, and motivating, making students 
                  feel at home while growing professionally. That's why Hindusthan is a preferred choice for many.
                </p>
              </div>
            </div>
          </section>

          {/* Centres of Excellence */}
          <div className={`hh-excellence-section ${isVisible ? 'hh-animate-in' : ''}`}>
            <h2 className="hh-section-title-excellence">CENTRES OF EXCELLENCE</h2>
            <div className="hh-excellence-arch">
              {excellenceCenters.map((center, index) => (
                <div
                  key={index}
                  className={`hh-excellence-card ${hoveredCard === index ? 'hh-highlighted' : hoveredCard !== null && hoveredCard !== index ? 'hh-dimmed' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(2)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="hh-card-image">
                    <img src={center.image} alt={center.title} />
                    <div className="hh-card-overlay">
                      <div className="hh-card-overlay-inner">
                        <h3 className="hh-card-title">{center.title}</h3>
                        <div className="hh-expand-icon">⊞</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Hindusthan Great */}
          <div className={`hh-greatness-section ${isVisible ? 'hh-animate-in' : ''}`}>
            <div className="hh-greatness-container">
              <div className="hh-arch-background"></div>
              <div className="hh-greatness-center">
                <h2>
                  WHAT MAKES <br />
                  <span className="hh-highlight">HINDUSTHAN</span> GREAT, <br />
                  MAKES YOU GREAT?
                </h2>
              </div>
              <div className="hh-greatness-features">
                {greatnessFeatures.map((feature, index) => {
                  return (
                    <div key={index} className={`hh-greatness-feature hh-feature-${index + 1}`}>
                      <div className="hh-feature-icon-wrapper">
                        <img src={feature.image} alt={feature.title} className="hh-feature-icon-image" />
                      </div>
                      <h3 className="hh-feature-title">{feature.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Achievement Numbers */}
          <div className={`hh-achievements-section ${isVisible ? 'hh-animate-in' : ''}`} ref={countersRef}>
            <div className="hh-achievements-layout">
              <div className="hh-achievements-row-1">
                {achievements.slice(0, 3).map((item, index) => (
                  <div key={index} className="hh-achievement-card" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                    <div className="hh-number-box-wrapper">
                      <div className="hh-plus-badge"></div>
                      <div className="hh-achievement-number">{item.number}</div>
                    </div>
                    <p className="hh-achievement-label">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="hh-achievements-row-2">
                {achievements.slice(3, 5).map((item, index) => (
                  <div key={index + 3} className="hh-achievement-card" style={{ animationDelay: '0.4s' }}>
                    <div className="hh-number-box-wrapper">
                      <div className="hh-plus-badge"></div>
                      <div className="hh-achievement-number">{item.number}</div>
                    </div>
                    <p className="hh-achievement-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recruiters */}
        <div className="hh-international-collaboration">
          <div className="hh-collaboration-slider">
            <h3>International <br /> Collabration</h3>
            <div className="hh-collaboration-track">
              {logos.concat(logos).map((logo, i) => (
                <img key={i} src={logo} alt="logo" />
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Why;
