import React, { useState, useEffect } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { FaChevronRight, FaTimes } from "react-icons/fa"; // ✅ Added FaTimes
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import logoLight from "../Assets/HICElogo.png";
import logoDark from "../Assets/HICEdarklogo.png";
import overViewIcon from "../Assets/Vector/Overview.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [infrastructureOpen,setinfrastructureOpen] = useState(false);
  const [placementsOpen, setPlacementsOpen] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
const [mobileAdmission, setMobileAdmission] = useState(false);
const [mobileInfra, setMobileInfra] = useState(false);
const [mobilePlacements, setMobilePlacements] = useState(false);
const [mobileAcademics, setMobileAcademics] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setAboutOpen(false);
    setAcademicsOpen(false);
    setMenuOpen(false);
  };

  // ✅ Prevent body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <NavLink to="/" onClick={closeMenus}>
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Hindusthan Logo"
            className="navbar-logo"
          />
        </NavLink>
      </div>

      {/* ✅ Hamburger / X Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <FaTimes size={28} color={scrolled ? "black" : "white"} />
        ) : (
          <LuAlignJustify size={28} color={scrolled ? "black" : "white"} />
        )}
      </div>

      {/* ✅ Menu Links */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" onClick={closeMenus}>
              Home
            </NavLink>
          </li>

          {/* About Us */}
          <li
            className="about-dropdown"
            onMouseEnter={() => !menuOpen && setAboutOpen(true)}
            onMouseLeave={() => !menuOpen && setAboutOpen(false)}
            onClick={() => menuOpen && setAboutOpen(!aboutOpen)}
          >
            <NavLink
              to="/about-us"
              onClick={() => menuOpen && setAboutOpen(!aboutOpen)}
            >
              About Us<FaChevronRight className="mobile-arrow" />
            </NavLink>

            {(aboutOpen || (!menuOpen && aboutOpen)) && (
              <div className="about-megamenu">
                <div className="about-flex">
                  <div className="about-intro">
                    <h3>Overview of Hindusthan Educational Institutions</h3>
                    <p>
                      Setting new trends, introducing innovative training
                      methodologies and guiding our students towards success is
                      what we sincerely aim at.
                    </p>
                    <a href="/about-us" className="learn-btn">
                      <img src={overViewIcon} alt="icon" />
                      Learn More
                    </a>
                  </div>

                  <div className="about-grid">
                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/aboutTrust");
                        closeMenus();
                      }}
                    >
                      <h3>
                        About our Trustee{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Our esteemed Trustee provides visionary leadership that drives academic excellence, innovation, and holistic development across the institution.</p>
                    </div>

                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/aboutHICE");
                        closeMenus();
                      }}
                    >
                      <h3>
                        About HICE{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>HICE is a premier institution committed to delivering quality education through innovation, industry collaboration, and a learner-centric environment.</p>
                    </div>

                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/whyHindusthan");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Why Hindusthan{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Hindusthan empowers students with a future-focused learning environment that blends academic excellence, innovation, and real-world opportunities.</p>
                    </div>

                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/principal-desk");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Principal Desk{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Our Principal leads with integrity and purpose, fostering an inclusive learning culture that inspires excellence and lifelong growth.</p>
                    </div>

                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/accrediation");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Accreditations & Recognitions{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>NAAC accredited, ISO certified, and UGC approved.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          {/* Admission */}
<li
  className="admission-dropdown"
  onMouseEnter={() => !menuOpen && setAdmissionOpen(true)}
  onMouseLeave={() => !menuOpen && setAdmissionOpen(false)}
  onClick={() => menuOpen && setAdmissionOpen(!admissionOpen)}
>
  <NavLink to="/admission">
    Admission <FaChevronRight className="mobile-arrow" />
  </NavLink>

  {(admissionOpen || (!menuOpen && admissionOpen)) && (
    <div className="admission-megamenu">
      <div className="admission-flex">
        <div className="admission-intro">
          <h3>Admission Information</h3>
          <p>
            Admission Information provides clear details on eligibility, application procedures, and 
            important dates for enrolling at Hindusthan College of Engineering.
          </p>
        </div>

        <div className="admission-grid">
          <div
            className="admission-nav"
            onClick={() => {
              navigate("/admission-policy");
              closeMenus();
            }}
          >
            <h3>Admission Policy <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>Our Admission Policy ensures fair evaluation, equal opportunity, and a structured 
              process for selecting deserving candidates across all programs.</p>
          </div>

          <div
            className="admission-nav"
            onClick={() => {
              navigate("/admission-form");
              closeMenus();
            }}
          >
            <h3>Application Form <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>The Application Form allows prospective students to submit their personal, academic, and program
               details required for the admission process.</p>
          </div>

          <div
            className="admission-nav"
            onClick={() => {
              navigate("/prospectus");
              closeMenus();
            }}
          >
            <h3>Prospectus <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>Our Prospectus offers detailed insights into courses, campus life, faculty excellence, and 
              opportunities available at Hindusthan College of Engineering.</p>
          </div>

          <div
            className="admission-nav"
            onClick={() => {
              navigate("/scholarships");
              closeMenus();
            }}
          >
            <h3>Scholarships <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>Scholarships are offered to support eligible students by recognizing academic excellence and providing
               financial assistance to ease their educational journey.</p>
          </div>
        </div>
      </div>
    </div>
  )}
</li>



          {/* Academics */}
          <li
            className="academics-dropdown"
            onMouseEnter={() => !menuOpen && setAcademicsOpen(true)}
            onMouseLeave={() => !menuOpen && setAcademicsOpen(false)}
            onClick={() => menuOpen && setAcademicsOpen(!academicsOpen)}
          >
            <NavLink to="/academics">Academics<FaChevronRight className="mobile-arrow" /></NavLink>

            {(academicsOpen || (!menuOpen && academicsOpen)) && (
              <div className="academics-megamenu">
                <div className="about-flex">
                  <div className="about-intro">
                    <h3>Academic Excellence at Hindusthan</h3>
                    <p>
                      Explore diverse programs, innovative curriculum, and
                      transformative learning experiences designed for future
                      leaders.
                    </p>
                  </div>

                  <div className="about-grid">
                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/ug-pg-programme");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Programmes{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Explore diverse, industry-ready programmes for your academic growth.</p>
                    </div>

                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Curiculum & Syllabus{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Access detailed course structures and subject-wise syllabi for every programme.</p>
                    </div>
                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Academic Calender{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>View the scheduled academic activities, timelines, and important institutional dates.</p>
                    </div>
                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Student Centric Learning{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Experience learning designed to support individual student needs, growth, and active participation.</p>
                    </div>
                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        SDGs{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Promoting Sustainable Development Goals through education, innovation, and responsible campus initiatives.</p>
                    </div>
                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Educational Philosophy{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Our educational philosophy focuses on holistic learning that nurtures knowledge, values, and real-world skills.</p>
                    </div>
                     <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Magazine{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Explore our annual magazine showcasing student achievements, events, and institutional highlights.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
             className="infrastructure-dropdown"
             onMouseEnter={() => !menuOpen && setinfrastructureOpen(true)}
             onMouseLeave={() => !menuOpen && setinfrastructureOpen(false)}
             onClick={()=>menuOpen && setinfrastructureOpen(!infrastructureOpen)} 
          >
            <NavLink to="/gallery" onClick={closeMenus}>
             Infrastructure
            </NavLink>
            {(infrastructureOpen || (!menuOpen && infrastructureOpen)) && (
              <div className="infrastructure-megamenu">
                <div className="infrastructure-flex">
                  <div className="infrastructure-intro">
                    <h3>Campus Overview</h3>
                    <p>
                      Explore diverse programs, innovative curriculum, and
                      transformative learning experiences designed for future
                      leaders.
                    </p>
                  </div>

                  <div className="infrastructure-grid">
                    <div
                      className="infrastructure-nav"
                      onClick={() => {
                        navigate("/ug-pg-programme");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Classroom{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Modern, technology-enabled classrooms designed to enhance interactive and engaging learning experiences.
They provide a comfortable environment that supports effective teaching and student participation.</p>
                    </div>

                    <div
                      className="infrastructure-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Library{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Our library offers a vast collection of books, journals, e-resources, and digital learning materials.
It serves as a knowledge hub that supports research, academic growth, and self-learning.</p>
                    </div>
                     <div
                      className="infrastructure-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Hostel{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>The hostel provides safe, comfortable, and well-maintained living spaces for students.
It ensures a homely environment with essential amenities and round-the-clock support.</p>
                    </div>
                     <div
                      className="infrastructure-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Sports{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Our sports facilities promote physical fitness, teamwork, and a strong competitive spirit among students.
A wide range of indoor and outdoor games encourages active participation and overall development.</p>
                    </div>
                     <div
                      className="infrastructure-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Canteen{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>The canteen offers hygienic, fresh, and affordable food options that cater to diverse tastes.
It provides a lively space for students to relax, interact, and enjoy nutritious meals.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Placements */}
<li
  className="placements-dropdown"
  onMouseEnter={() => !menuOpen && setPlacementsOpen(true)}
  onMouseLeave={() => !menuOpen && setPlacementsOpen(false)}
  onClick={() => menuOpen && setPlacementsOpen(!placementsOpen)}
>
  <NavLink to="/placements" onClick={closeMenus}>
    Placements <FaChevronRight className="mobile-arrow" />
  </NavLink>

  {(placementsOpen || (!menuOpen && placementsOpen)) && (
    <div className="megamenu placements-megamenu">
      <div className="placements-flex">

        {/* LEFT INTRO */}
        <div className="placements-intro">
          <h3>Placement Excellence</h3>
          <p>
            Our dedicated placement cell ensures strong industry connections,
            career guidance, and excellent job opportunities for students.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="placement-grid">

          {/* Training & Development */}
          <div
            className="placement-item"
            onClick={() => {
              navigate("/training-development");
              closeMenus();
            }}
          >
            <h3>
              Placement Training <span className="icon-vector"><FaChevronRight /></span>
            </h3>
            <p>
              Soft skills, aptitude training, communication skills,
              interview preparation, and corporate readiness programs.
            </p>
          </div>

          {/* Recruiters */}
          <div
            className="placement-item"
            onClick={() => {
              navigate("/recruiters");
              closeMenus();
            }}
          >
            <h3>
              Our Recruiters <span className="icon-vector"><FaChevronRight /></span>
            </h3>
            <p>
              Leading MNCs like TCS, Wipro, Cognizant, Infosys, HCL,
              and more recruit from our campus every year.
            </p>
          </div>

        </div>

      </div>
    </div>
  )}
</li>


          <li className="desktop-only">
            <a href="/applyNow" className="apply-btn" onClick={closeMenus}>
              Apply Now
            </a>
          </li>
          {/* Additional small-screen-only links */}
          {/* All main nav links for mobile menu */}
         {/* APPLY BUTTON */}
{/* APPLY BUTTON */}
<li className="mobile-only apply">
  <a href="/applyNow" className="apply-btn" onClick={closeMenus}>
    Apply Now
  </a>
</li>

{/* COUNSELLING CODE */}
<li className="mobile-only code">
  <NavLink to="/" onClick={closeMenus}>Counselling Code : 2777</NavLink>
</li>

{/* MAIN NAV LINKS */}
<li className="mobile-only strong">
<a className="mobile-link">
  <NavLink to="/" onClick={closeMenus}>Home</NavLink></a>
</li>

{/* ABOUT US */}
<li className="mobile-only strong" onClick={() => setMobileAbout(true)}>
  <a className="mobile-link">
  About Us
  <FaChevronRight className="mobile-dropdown-arrow" /></a>
</li>

{/* ADMISSION */}
<li className="mobile-only strong" onClick={() => setMobileAdmission(true)}>
 <a className="mobile-link"> Admission
  <FaChevronRight className="mobile-dropdown-arrow" /></a>
</li>

{/* ACADEMICS */}
<li className="mobile-only strong" onClick={() => setMobileAcademics(true)}>
  <a className="mobile-link">Academics
  <FaChevronRight className="mobile-dropdown-arrow" /></a>
</li>


{/* INFRASTRUCTURE */}
<li className="mobile-only strong" onClick={() => setMobileInfra(true)}>
  <a className="mobile-link">Infrastructure
  <FaChevronRight className="mobile-dropdown-arrow" /></a>
</li>

{/* PLACEMENTS */}
<li className="mobile-only strong line" onClick={() => setMobilePlacements(true)}>
  <a className="mobile-link">Placements
  <FaChevronRight className="mobile-dropdown-arrow" /></a>
</li>
<hr/>

{/* REMAINING MOBILE LINKS */}
<li className="mobile-only weak"><NavLink to="/blog" onClick={closeMenus}>Careers</NavLink></li>
<li className="mobile-only weak"><NavLink to="/careers" onClick={closeMenus}>E Campus Login</NavLink></li>
<li className="mobile-only weak"><NavLink to="/alumni" onClick={closeMenus}>Mandatory Discloser</NavLink></li>
<li className="mobile-only weak "><NavLink to="/contact" onClick={closeMenus}>Contact Us</NavLink></li>

</ul>     
      </div>

      {/* SUBMENU: ABOUT */}
<div className={`mobile-submenu ${mobileAbout ? "open" : ""}`}>
  <div className="mobile-back" onClick={() => setMobileAbout(false)}>
    <FaChevronRight style={{ transform: "rotate(180deg)" }} /> Back
  </div>
<ul>
  <li><NavLink to="/aboutTrust" onClick={closeMenus}>About our Trustee</NavLink></li>
  <li><NavLink to="/aboutHICE" onClick={closeMenus}>About HICE</NavLink></li>
  <li><NavLink to="/whyHindusthan" onClick={closeMenus}>Why Hindusthan</NavLink></li>
  <li><NavLink to="/principal-desk" onClick={closeMenus}>Principal Desk</NavLink></li>
  <li><NavLink to="/accrediation" onClick={closeMenus}>Accreditations</NavLink></li>
</ul>
</div>

{/* SUBMENU: ADMISSION */}
<div className={`mobile-submenu ${mobileAdmission ? "open" : ""}`}>
  <div className="mobile-back" onClick={() => setMobileAdmission(false)}>
    <FaChevronRight style={{ transform: "rotate(180deg)" }} /> Back
  </div>
<ul>
  <li><NavLink to="/admission-policy" onClick={closeMenus}>Admission Policy</NavLink></li>
  <li><NavLink to="/admission-form" onClick={closeMenus}>Application Form</NavLink></li>
  <li><NavLink to="/prospectus" onClick={closeMenus}>Prospectus</NavLink></li>
  <li><NavLink to="/scholarships" onClick={closeMenus}>Scholarships</NavLink></li>
</ul>
</div>

{/* SUBMENU: INFRASTRUCTURE */}
<div className={`mobile-submenu ${mobileInfra ? "open" : ""}`}>
  <div className="mobile-back" onClick={() => setMobileInfra(false)}>
    <FaChevronRight style={{ transform: "rotate(180deg)" }} /> Back
  </div>
<ul>
  <li><NavLink to="/classroom" onClick={closeMenus}>Classroom</NavLink></li>
  <li><NavLink to="/library" onClick={closeMenus}>Library</NavLink></li>
  <li><NavLink to="/hostel" onClick={closeMenus}>Hostel</NavLink></li>
  <li><NavLink to="/sports" onClick={closeMenus}>Sports</NavLink></li>
  <li><NavLink to="/canteen" onClick={closeMenus}>Canteen</NavLink></li>
</ul>
</div>

{/* SUBMENU: PLACEMENTS */}
<div className={`mobile-submenu ${mobilePlacements ? "open" : ""}`}>
  <div className="mobile-back" onClick={() => setMobilePlacements(false)}>
    <FaChevronRight style={{ transform: "rotate(180deg)" }} /> Back
  </div>
<ul>
  <li><NavLink to="/training-development" onClick={closeMenus}>Placement Training</NavLink></li>
  <li><NavLink to="/recruiters" onClick={closeMenus}>Our Recruiters</NavLink></li>
</ul>
</div>
{/* SUBMENU: ACADEMICS */}
<div className={`mobile-submenu ${mobileAcademics ? "open" : ""}`}>
  <div className="mobile-back" onClick={() => setMobileAcademics(false)}>
    <FaChevronRight style={{ transform: "rotate(180deg)" }} /> Back
  </div>
  <ul>
    <li><NavLink to="/ug-pg-programme" onClick={closeMenus}>Programmes</NavLink></li>
    <li><NavLink to="/curriculum-syllabus" onClick={closeMenus}>Curriculum & Syllabus</NavLink></li>
    <li><NavLink to="/academic-calendar" onClick={closeMenus}>Academic Calendar</NavLink></li>
    <li><NavLink to="/student-centric-learning" onClick={closeMenus}>Student Centric Learning</NavLink></li>
    <li><NavLink to="/sdgs" onClick={closeMenus}>SDGs</NavLink></li>
    <li><NavLink to="/educational-philosophy" onClick={closeMenus}>Educational Philosophy</NavLink></li>
    <li><NavLink to="/magazine" onClick={closeMenus}>Magazine</NavLink></li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
