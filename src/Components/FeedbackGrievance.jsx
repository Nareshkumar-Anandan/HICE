import React from "react";
import "../Styles/FeedbackGrievance.css";
import campusBackground from "../Assets/Subtract.png";
import Footer from "./Footer";
const FeedbackGrievance = () => {
  return (
    <>
     {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-background">
              <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
            </div>
    
            <div className="hero-content">
    
              {/* Hero Text */}
              <div className="hero-text">
                <h1 className="hero-title">FeedBack and Grievance</h1>
                <div className="breadcrumb"><a href="/">Home</a> &gt; <a href="/feedback-grievance">Feedback & Grievance</a></div>
                <p className="hero-description">
                  If you are passionate and driven, explore our current openings across
                  Hindusthan Institutions and apply.
                </p>
              </div>
            </div>
          </section>
    <div className="feedback-grievance-container">
      <h1 className="page-title">Feedback & Grievance Redressal</h1>

      <p className="page-desc">
        The institution encourages students and faculty members to share their
        feedback and raise grievances through the official AICTE portals to
        ensure transparency, accountability, and continuous improvement.
      </p>

      <div className="card-wrapper">
        {/* Student Feedback */}
        <div className="fg-card">
          <h2>Student Feedback</h2>
          <p>
            Students can submit their feedback or grievances directly through
            the official AICTE feedback portal.
          </p>
          <a
            href="https://www.aicte-india.org/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="fg-btn"
          >
            Submit Student Feedback
          </a>
        </div>

        {/* Faculty Feedback */}
        <div className="fg-card">
          <h2>Faculty Feedback</h2>
          <p>
            Faculty members are requested to share their feedback and concerns
            through the AICTE grievance and feedback system.
          </p>
          <a
            href="https://www.aicte-india.org/grievance"
            target="_blank"
            rel="noopener noreferrer"
            className="fg-btn"
          >
            Submit Faculty Grievance
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default FeedbackGrievance;
