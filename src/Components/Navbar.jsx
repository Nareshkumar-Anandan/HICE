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
            Get complete details regarding admissions, eligibility,
            scholarship benefits and procedures.
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
            <p>Understand our transparent admission selection criteria.</p>
          </div>

          <div
            className="admission-nav"
            onClick={() => {
              navigate("/admission-form");
              closeMenus();
            }}
          >
            <h3>Application Form <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>Start your application journey here.</p>
          </div>

          <div
            className="admission-nav"
            onClick={() => {
              navigate("/prospectus");
              closeMenus();
            }}
          >
            <h3>Prospectus <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>Download our program details and course overview.</p>
          </div>

          <div
            className="admission-nav"
            onClick={() => {
              navigate("/scholarships");
              closeMenus();
            }}
          >
            <h3>Scholarships <span className="icon-vector"><FaChevronRight /></span></h3>
            <p>Exclusive scholarships for meritorious students.</p>
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
                        UG & PG Programmes{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Comprehensive UG & PG courses across disciplines.</p>
                    </div>

                    <div
                      className="about-nav"
                      onClick={() => {
                        navigate("/faculty");
                        closeMenus();
                      }}
                    >
                      <h3>
                        Our Faculty{" "}
                        <span className="icon-vector">
                          <FaChevronRight />
                        </span>
                      </h3>
                      <p>Highly qualified educators shaping future leaders.</p>
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
                      <p>Comprehensive UG & PG courses across disciplines.</p>
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
                      <p>Highly qualified educators shaping future leaders.</p>
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
                      <p>Highly qualified educators shaping future leaders.</p>
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
                      <p>Highly qualified educators shaping future leaders.</p>
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
                      <p>Highly qualified educators shaping future leaders.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <NavLink to="" onClick={closeMenus}>
              Placements
            </NavLink>
          </li>

          <li>
            <a href="/applyNow" className="apply-btn" onClick={closeMenus}>
              Admission
            </a>
          </li>
          {/* Additional small-screen-only links */}
<li className="mobile-only">
  <NavLink to="/blog" onClick={closeMenus}>Careers</NavLink>
</li>
<li className="mobile-only">
  <NavLink to="/careers" onClick={closeMenus}>E Campus Login</NavLink>
</li>
<li className="mobile-only">
  <NavLink to="/alumni" onClick={closeMenus}>Mandtatory Discloser</NavLink>
</li>
<li className="mobile-only">
  <NavLink to="/contact" onClick={closeMenus}>Contact Us</NavLink>
</li>
<li className="mobile-only">
  <NavLink to="/school" onClick={closeMenus}>Counselling Code</NavLink>
</li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
