import React, { useState, useEffect } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "../Styles/Navbar.css";
import logoLight from "../Assets/HICElogo.png";
import logoDark from "../Assets/HICEdarklogo.png";
import overViewIcon from "../Assets/Vector/Overview.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
   const [academicsOpen, setAcademicsOpen] = useState(false); // ✅ new state
   const navigate = useNavigate(); // ✅ initialize
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      if (window.scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <NavLink to="/">
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Hindusthan Logo"
            className="navbar-logo"
          />
        </NavLink>
      </div>

      <div className="navbar-menu">
        <ul className="navbar-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>

          {/* About Us with dropdown */}
          <li
            className="about-dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active" : "")} >
              About Us
            </NavLink>

            {aboutOpen && (
              <div className="about-megamenu">
                <div className="about-flex">
                 <div className="about-intro">
                    <h3>Overview of Hindusthan Educational Institutions</h3>
                    <p>
                      Setting new trends, introducing innovative training methodologies
                      and guiding our students towards the road to success is what we
                      sincerely aim at.
                    </p>
                    <a href="/about-us" className="learn-btn" >
                    <img src={overViewIcon} alt="icon"/>Learn More</a>
                  </div>
                <div className="about-grid">
                 
                  <div className="about-nav"
                       onClick={() => {navigate("/aboutTrust");
                        setAboutOpen(false);}
                       }
                             style={{ cursor: "pointer" }}>
                    
                  <h3>About our Trustee<span className="icon-vector"><FaChevronRight className="text-lg" /></span></h3>
                    <p>
                      Hindusthan Trustees, led by Shri T.S.R. Khannaiyann and
                      Smt. Saraswathi Khannaiyann, exemplify visionary leadership and
                      educational excellence.
                    </p>
                  </div>
                   <div className="about-nav"
                   onClick={() => {navigate("/aboutHICE");
                    setAboutOpen(false);
                   }}
                   
                             style={{ cursor: "pointer" }}>
                   
                    <h3>About HICE<span className="icon-vector"><FaChevronRight className="text-lg" /></span></h3>
                    <p>
                      Hindusthan Trustees, led by Shri T.S.R. Khannaiyann and
                      Smt. Saraswathi Khannaiyann, exemplify visionary leadership and
                      educational excellence.
                    </p>
                  </div>
                   <div className="about-nav" 
                    onClick={() => {navigate("/whyHindusthan");
                      setAboutOpen(false);
                    }}
                             style={{ cursor: "pointer" }}>
                    <h3>Why Hindusthan <span className="icon-vector"><FaChevronRight className="text-lg" /></span></h3>
                    <p>
                      Hindusthan Trustees, led by Shri T.S.R. Khannaiyann and
                      Smt. Saraswathi Khannaiyann, exemplify visionary leadership and
                      educational excellence.
                    </p>
                  </div>
                  <div className="about-nav"  onClick={() => {navigate("/principal-desk");
                    setAboutOpen(false);
                   }}
                             style={{ cursor: "pointer" }}>

                    <h3>Principal Desk <span className="icon-vector"><FaChevronRight className="text-lg" /></span></h3>
                    <p>
                      Integrity, inclusiveness, and lifelong learning. Focusing on
                      academic excellence, cultural enrichment, and sustainable growth.
                    </p>
                  </div>
                  <div className="about-nav"
                   onClick={() => {navigate("/accrediation");
                    setAboutOpen(false);
                   }}
                             style={{ cursor: "pointer" }}>
                    <h3>Accreditations & Recognitions <span className="icon-vector"><FaChevronRight className="text-lg" /></span></h3>
                    <p>
                      NAAC accredited, ISO certified, and UGC approved, consistently
                      ranked among top institutions.
                    </p>
                  </div>
                </div>
              </div></div>
            )}
          </li>

                 {/* Academics with dropdown */}
          <li
            className="academics-dropdown"
            onMouseEnter={() => setAcademicsOpen(true)}
            onMouseLeave={() => setAcademicsOpen(false)}
          >
            <NavLink to="/academics" className={({ isActive }) => (isActive ? "active" : "")}>
              Academics
            </NavLink>

            {academicsOpen && (
              <div className="academics-megamenu">
                <div className="about-flex">
                  <div className="about-intro">
                    <h3>Academic Excellence at Hindusthan</h3>
                    <p>
                      Explore diverse programs, innovative curriculum, and
                      transformative learning experiences designed for future leaders.
                    </p>
                  </div>
                  <div className="about-grid">
                    <div className="about-nav" onClick={() => {navigate("/ug-pg-programme");
                    setAcademicsOpen(false);
                     }} 
                    style={{ cursor: "pointer" }}>
                      <h3>
                        Undergraduate Programs & Postgraduate Programs
                        <span className="icon-vector"><FaChevronRight /></span>
                      </h3>
                      <p>
                        Comprehensive UG courses across Science, Arts, Engineering, and more.
                      </p>
                    </div>
                    {/* <div className="about-nav" onClick={() => navigate("/pgPrograms")} style={{ cursor: "pointer" }}>
                      <h3>
                        Postgraduate Programs
                        <span className="icon-vector"><FaChevronRight /></span>
                      </h3>
                      <p>
                        Specialized PG degrees fostering advanced skills and research.
                      </p>
                    </div> */}
                    {/* <div className="about-nav" onClick={() => navigate("/research")} style={{ cursor: "pointer" }}>
                      <h3>
                        Research & Innovation
                        <span className="icon-vector"><FaChevronRight /></span>
                      </h3>
                      <p>
                        State-of-the-art labs and collaborative research opportunities.
                      </p>
                    </div> */}
                    <div className="about-nav" onClick={() => navigate("/faculty")} style={{ cursor: "pointer" }}>
                      <h3>
                        Our Faculty
                        <span className="icon-vector"><FaChevronRight /></span>
                      </h3>
                      <p>
                        Highly qualified educators shaping the next generation of thinkers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
              Gallery
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="/awards" className={({ isActive }) => (isActive ? "active" : "")}>
              Awards
            </NavLink> */}
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <a href="/applyNow" className="apply-btn">Admission</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
