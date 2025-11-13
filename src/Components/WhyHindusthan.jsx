import React, { useState, useEffect, useRef } from 'react';
import '../Styles/WhyHindusthan.css';
import campusBackground from '../Assets/Subtract.png';
import Footer from './Footer';
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/lab.jpg';
import RightImage from '../Assets/Vector.png';
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
    {
      title: 'Drone Technology',
      image: DroneImage,
      description: 'Advanced UAV systems and applications'
    },
    {
      title: 'Robotics',
      image: RobotImage,
      description: 'Cutting-edge robotic solutions'
    },
    {
      title: '3D Printing Technology',
      image: s3dImage,
      description: 'Additive manufacturing excellence'
    },
    {
      title: 'AICTE Idea Lab',
      image: aicteImage,
      description: 'Innovation and entrepreneurship hub'
    },
    {
      title: 'Youth Empowerment',
      image: youthImage,
      description: 'Developing future leaders'
    }
  ];

  const greatnessFeatures = [
    {
      image: AcademicImg,
      title: 'Academic Excellence'
    },
    {
      image: IndustryImg,
      title: 'Industry Collaborations'
    },
    {
      image: studentImg,
      title: 'Student Support Services'
    },
    {
      image: ResearchImg,
      title: 'Research Opportunities'
    },
    {
      image: DiversityImg,
      title: 'Diversity and Inclusivity'
    }
  ];

  const achievements = [
    { number: useCountUp(30), label: 'Years of Empowering Young Minds' },
    { number: useCountUp(25), label: 'International collaboration' },
    { number: useCountUp(75), label: 'Start ups' },
    { number: useCountUp(20), label: 'Crore students scholarships offered' },
    { number: useCountUp(50), label: 'Industrial Ideas submitted for industrial organization' }
  ];

  const collaborations = [
    { name: 'AMITY GLOBAL INSTITUTE', logo: 'src/Assets/amity.png' },
    { name: 'ISDC', logo: 'src/Assets/isdc.png' },
    { name: 'SUNWAY UNIVERSITY', logo: 'src/Assets/sunway.png' },
    { name: 'Institute of Analytics', logo: 'src/Assets/ioa.png' }
  ];

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
                <h1 className="hero-title">Our Institutions</h1>
                <div className="breadcrumb">
                  <a href="/" style={{ textDecoration: "none", color: "white" }}>
                    Home
                  </a>{" "}
                   &gt;{" "}
                  <a href="/about-us" style={{ textDecoration: "none", color: "white" }}>
                   Academics
                  </a>{" "}
                  &gt;{" "}
                  <a href="#" style={{ textDecoration: "none", color: "#f4b400" }}>
                    Our Institutions
                  </a>
                </div>
                <p className="hero-description">
                  If you are passionate and driven, explore our current openings
                  across Hindusthan Institutions and apply.
                </p>
              </div>
            </div>
          </section>
    <div className="why-page">   
        <div className="why-hindusthan-container">
          {/* Why Hindusthan Section */}
           <section className="why-section">
         <h2 className="why-title"  data-aos="fade-up">
            <span className="highlight">|</span> WHY HINDUSTHAN ?
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

          {/* Centres of Excellence */}
          <div className={`excellence-section ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="section-title-excellence">CENTRES OF EXCELLENCE</h2>

            <div className="excellence-arch">
              {excellenceCenters.map((center, index) => (
                <div
                  key={index}
                  className={`excellence-card ${hoveredCard === index ? 'highlighted' : hoveredCard !== null && hoveredCard !== index ? 'dimmed' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(2)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-image">
                    <img src={center.image} alt={center.title} />
                    
                    <div className="card-overlay">
                        <div className="card-overlay-inner">
                            <h3 className="card-title">{center.title}</h3>
                            <div className="expand-icon">⊞</div>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Hindusthan Great */}
          <div className={`greatness-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="greatness-container">
              <div className="arch-background"></div>

              <div className="greatness-center">
                  <h2>WHAT MAKES <br /><span className="highlight">HINDUSTHAN</span> GREAT,  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAKES YOU GREAT?
                  </h2>
             
              </div>

              <div className="greatness-features">
                {greatnessFeatures.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className={`greatness-feature feature-${index + 1}`}
                    >
                      <div className="feature-icon-wrapper">
                        <img src={feature.image} alt={feature.title} className="feature-icon-image" />
                      </div>
                      <h3 className="feature-title">{feature.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Achievement Numbers */}
          <div className={`achievements-section ${isVisible ? 'animate-in' : ''}`} ref={countersRef}>
            <div className="achievements-layout">
              <div className="achievements-row-1">
                <div className="achievement-card-new" style={{ animationDelay: '0.1s' }}>
                  <div className="number-box-wrapper">
                    <div className="plus-badge"></div>
                    <div className="achievement-number-new">
                      {achievements[0].number}
                    </div>
                  </div>
                  <p className="achievement-label-new">{achievements[0].label}</p>
                </div>
                <div className="achievement-card-new" style={{ animationDelay: '0.2s' }}>
                  <div className="number-box-wrapper">
                    <div className="plus-badge"></div>
                    <div className="achievement-number-new">
                      {achievements[1].number}
                    </div>
                  </div>
                  <p className="achievement-label-new">{achievements[1].label}</p>
                </div>
                <div className="achievement-card-new" style={{ animationDelay: '0.3s' }}>
                  <div className="number-box-wrapper">
                    <div className="plus-badge"></div>
                    <div className="achievement-number-new">
                      {achievements[2].number}
                    </div>
                  </div>
                  <p className="achievement-label-new">{achievements[2].label}</p>
                </div>
              </div>

              <div className="achievements-row-2">
                <div className="achievement-card-new" style={{ animationDelay: '0.4s' }}>
                  <div className="number-box-wrapper">
                    <div className="plus-badge"></div>
                    <div className="achievement-number-new">
                      {achievements[3].number}
                    </div>
                  </div>
                  <p className="achievement-label-new">{achievements[3].label}</p>
                </div>
 <div className="achievement-card-new" style={{ animationDelay: '0.4s' }}>
                  <div className="number-box-wrapper">
                    <div className="plus-badge"></div>
                    <div className="achievement-number-new">
                      {achievements[4].number}
                    </div>
                  </div>
                  <p className="achievement-label-new">{achievements[4].label}</p>
                </div>
                
              </div>
            </div>
          </div>

        </div>
 <div className="international-collabration">
        <div className="collabration-slider">
            <h3>International <br /> Collabration</h3>
          <div className="collabration-track">
            {logos.concat(logos).map((logo, i) => (
              <img key={i} src={logo} alt="logo" />
            ))}
          </div>
        </div>
      </div>
      
     
    </div>
 <Footer/> </>
  );
};

export default Why;