import React from 'react'
import "../Styles/Principles.css";
import campusBackground from '../Assets/Subtract.png';
import LeftImage from "../Assets/hostel.jpg";
import LeftImage2 from "../Assets/hospital.jpg";
import RightImage from '../Assets/Vector.png';
import Footer from './Footer';
function Principles() {
  return (
    <>
     <section className="hero-section">
                          <div className="hero-background">
                            <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                          </div>
                  
                          <div className="hero-content">
                  
                            {/* Hero Text */}
                            <div className="hero-text">
                              <h1 className="hero-title">Principle Desk</h1>
                              <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a>{" "} &gt; {" "}<a href="/about-us" style={{ textDecoration:"none", color:"white"}}>About Us</a>
                              {" "} &gt; {" "}<a href="/principal-desk" style={{ textDecoration:"none", color:"#f1c40f"}}>Principle's Desk</a>
                              </div>
                              <p className="hero-description">
                                If you are passionate and driven, explore our current openings across
                                Hindusthan Institutions and apply.
                              </p>
                            </div>
                          </div>
                        </section>
    <section className="why-section">
                 <h2 className="why-title"  data-aos="fade-up">
                    <span className="highlight">|</span> ABOUT THE PRINCIPAL
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
                   <h2  data-aos="fade-up">
                    <span className="highlight-head">|</span> Name of the Principal
                  </h2>
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
            <section className="principal-container">
                <div className="principal-message">
                    <h2 data-aos = "fade-down"><span className='highlights'>|</span>What our Principal Says</h2>
                    <div className="principal-hypothesize">
                        <p data-aos ="fade-up">Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.</p>
                         <p data-aos ="fade-up">Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.</p>
                          <p data-aos ="fade-up">Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                    The campus life is vibrant, inclusive, and motivating, making students 
                    feel at home while growing professionally. That’s why Hindusthan is a preferred choice for many.</p>
                    <p data-aos="fade-right">- principal Signature</p>
                    </div>
                </div>

            </section>
            <Footer/>
    </>
  )
}

export default Principles;