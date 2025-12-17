import React, { useState, useEffect } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import logoLight from "../Assets/HICElogo.png";
import logoDark from "../Assets/HICEdarklogo.png";
import overViewIcon from "../Assets/Vector/Overview.png";
import Prospectus from "../Assets/Documents/Admission-Brouchure-25-26.pdf";

// =============================================================================
// 📌 DATA CONFIGURATION
// =============================================================================
// =============================================================================
// 📌 DATA CONFIGURATION
// =============================================================================
const NAV_DATA = {
  about: {
    title: "About Us",
    path: "/about-us",
    intro: {
      title: "Overview of Hindusthan Educational Institutions",
      text: "Setting new trends, introducing innovative training methodologies and guiding our students towards success is what we sincerely aim at.",
      link: "/about-us",
      linkText: "Learn More",
      icon: overViewIcon,
    },
    items: [
      {
        title: "About our Trustee",
        path: "/aboutTrust",
        desc: "Our esteemed Trustee provides visionary leadership that drives academic excellence, innovation, and holistic development across the institution.",
      },
      {
        title: "About HICE",
        path: "/aboutHICE",
        desc: "HICE is a premier institution committed to delivering quality education through innovation, industry collaboration, and a learner-centric environment.",
      },
      {
        title: "Why Hindusthan",
        path: "/whyHindusthan",
        desc: "Hindusthan empowers students with a future-focused learning environment that blends academic excellence, innovation, and real-world opportunities.",
      },
      {
        title: "Principal Desk",
        path: "/principal-desk",
        desc: "Our Principal leads with integrity and purpose, fostering an inclusive learning culture that inspires excellence and lifelong growth.",
      },
      {
        title: "Accreditations & Recognitions",
        path: "/accrediation",
        desc: "NAAC accredited, ISO certified, and UGC approved.",
      },
    ],
  },
  admission: {
    title: "Admission",
    path: "/admission",
    intro: {
      title: "Admission Information",
      text: "Admission Information provides clear details on eligibility, application procedures, and important dates for enrolling at Hindusthan College of Engineering.",
      link: "/admission",
      linkText: "Learn More",
      icon: overViewIcon,
    },
    items: [
      {
        title: "Admission Policy",
        path: "/admission-policy",
        desc: "Our Admission Policy ensures fair evaluation, equal opportunity, and a structured process for selecting deserving candidates.",
      },
      {
  title: "Application Form",
  path: "https://docs.google.com/forms/d/e/1FAIpQLSenAMxSrhytfELCOQ0t2HCzGMroLrRrv3n7hKblW4bNWvCv5A/viewform?usp=publish-editor",
  external: true,
  desc: "Apply online through our official admission application form.",
},
      {
        title: "Prospectus",
        path: Prospectus,
        desc: "Our Prospectus offers detailed insights into courses, campus life, faculty excellence, and opportunities.",
      },
      {
        title: "Scholarships",
        path: "/scholarships",
        underDevelopment: true,
        desc: "Scholarships are offered to support eligible students by recognizing academic excellence and providing financial assistance.",
      },
    ],
  },
  academics: {
    title: "Academics",
    path: "/academics",
    intro: {
      title: "Academic Excellence at Hindusthan",
      text: "Explore diverse programs, innovative curriculum, and transformative learning experiences designed for future leaders.",
      link: "/academics",
      linkText: "Learn More",
      icon: overViewIcon,
    },
    items: [
      {
        title: "Programmes",
        path: "/ug-pg-programme",
        desc: "Explore diverse, industry-ready programmes for your academic growth.",
      },
      {
        title: "Curiculum & Syllabus",
        path: "/curriculum-syllabus",
        desc: "Access detailed course structures and subject-wise syllabi for every programme.",
      },
      {
        title: "Academic Calender",
        path: "/academic-calendar",
        desc: "View the scheduled academic activities, timelines, and important institutional dates.",
      },
      {
        title: "Student Centric Learning",
        path: "/student-centric-learning",
        desc: "Experience learning designed to support individual student needs, growth, and active participation.",
      },
      {
        title: "SDGs",
        path: "/sdgs",
        desc: "Promoting Sustainable Development Goals through education, innovation, and responsible campus initiatives.",
      },
      {
        title: "Feedback & Grievance",
        path: "/feedback-grievance",
        desc: "Submit feedback or grievances through our official portal of AICTE.",
      },
      {
        title: "Magazine",
        path: "/magazine",
        desc: "Explore our annual magazine showcasing student achievements, events, and institutional highlights.",
      },
    ],
  },
  infrastructure: {
    title: "Infrastructure",
    path: "/gallery",
    intro: {
      title: "Campus Overview",
      text: "Explore diverse programs, innovative curriculum, and transformative learning experiences designed for future leaders.",
      link: "/gallery",
      linkText: "Learn More",
      icon: overViewIcon,
    },
    items: [
      {
        title: "Classroom",
        path: "/classroom",
        desc: "Modern, technology-enabled classrooms designed to enhance interactive and engaging learning experiences.",
      },
      {
        title: "Library",
        path: "/library",
        desc: "Our library offers a vast collection of books, journals, e-resources, and digital learning materials.",
      },
      {
        title: "Hostel",
        path: "/hostel",
        desc: "The hostel provides safe, comfortable, and well-maintained living spaces for students.",
      },
      {
        title: "Sports",
        path: "/sports",
        desc: "Our sports facilities promote physical fitness, teamwork, and a strong competitive spirit among students.",
      },
      {
        title: "Canteen",
        path: "/canteen",
        desc: "The canteen offers hygienic, fresh, and affordable food options that cater to diverse tastes.",
      },
    ],
  },
  placements: {
    title: "Placements",
    path: "/placements",
    intro: {
      title: "Placement Excellence",
      text: "Our dedicated placement cell ensures strong industry connections, career guidance, and excellent job opportunities for students.",
      link: "/placements",
      linkText: "Learn More",
      icon: overViewIcon,
    },
    items: [
      {
        title: "Placement Training",
        path: "/training-development",
        desc: "Soft skills, aptitude training, communication skills, interview preparation, and corporate readiness programs.",
      },
      {
        title: "Our Recruiters",
        path: "/recruiters",
        desc: "Leading MNCs like TCS, Wipro, Cognizant, Infosys, HCL, and more recruit from our campus every year.",
      },
    ],
  },
};

// =============================================================================
// 📌 COMPONENT
// =============================================================================
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = React.useRef(null); // Ref for menu container

  // Single state for active dropdown (desktop) and active submenu (mobile)
  // Value will be key from NAV_DATA e.g., 'about', 'admission'
  const [activeMenu, setActiveMenu] = useState(null);

  const navigate = useNavigate();

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("menu-open");
      document.body.classList.add("menu-open");
      // Reset scroll position when menu opens
      if (menuRef.current) {
        menuRef.current.scrollTop = 0;
      }
    } else {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  // Helpers
  const closeAll = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  const handleMouseEnter = (key) => {
    if (window.innerWidth > 992) { // Only hover on desktop
      setActiveMenu(key);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) {
      setActiveMenu(null);
    }
  };

  // Safe Navigation Helper to stop bubbling
  const handleNavClick = (e, path, external = false,isUnderDev = false) => {
    e.stopPropagation();
    if (window.innerWidth <= 992) {
      // Mobile approach: prevent default navigation if it has children? 
      // Actually usually user wants to go to page OR open menu.
      // Your design had both: Clicking "About Us" went to /about-us AND opened menu?
      // Standard UX: Click text -> Go to link. Click arrow -> Open submenu.
      // But let's support your logic:
    }
     // 🚧 Under Development Page
  if (isUnderDev) {
    alert("🚧 This page is under development. Please check back later.");
    closeAll();
    return;
  }
    // If it's a PDF, open in new tab
  if (typeof path === "string" && path.endsWith(".pdf")) {
    window.open(path, "_blank");
    closeAll();
    return;
  }
  // External links (Google Form, etc.)
  if (external || path.startsWith("http")) {
    window.open(path, "_blank", "noopener,noreferrer");
    closeAll();
    return;
  }
    navigate(path);
    closeAll();
  };

  const toggleMobileSubmenu = (key) => {
    setActiveMenu(activeMenu === key ? null : key);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LOGO */}
      <div className="navbar-left">
        <NavLink to="/" onClick={closeAll}>
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Hindusthan Logo"
            className="navbar-logo"
          />
        </NavLink>
      </div>

      {/* HAMBURGER TOGGLE */}
      <div className="menu-toggle" onClick={() => menuOpen ? closeAll() : setMenuOpen(true)}>
        {menuOpen ? (
          <FaTimes size={28} color={scrolled ? "black" : "white"} />
        ) : (
          <LuAlignJustify size={28} color={scrolled ? "black" : "white"} />
        )}
      </div>

      {/* DESKTOP & MOBILE MENU CONTAINER */}
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <ul className="navbar-links">
          {/* STATIC MOBILE LINKS (Apply, Code, etc) - Moved to Top */}
          <li className="mobile-only apply">
            <a href="/applyNow" className="apply-btn" onClick={closeAll}>Apply Now</a>
          </li>
          <li className="mobile-only code">
            <NavLink to="/" onClick={closeAll}>Counselling Code : 2777</NavLink>
          </li>

          {/* HOME */}
          <li className="mobile-only strong">
            <span className="mobile-link"><NavLink to="/" onClick={closeAll}>Home</NavLink></span>
          </li>
          <li className="desktop-only">
            <NavLink to="/" onClick={closeAll}>Home</NavLink>
          </li>

          {/* DYNAMIC DROPDOWNS */}
          {Object.entries(NAV_DATA).map(([key, data]) => (
            <li
              key={key}
              className={`dropdown-item ${activeMenu === key ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Desktop Link */}
              <div className="desktop-only nav-item-wrapper">
                <NavLink
                  to={data.path}
                  className={({ isActive }) => isActive ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    setActiveMenu(activeMenu === key ? null : key); // Toggle menu
                  }}
                >
                  {data.title}
                </NavLink>
              </div>

              {/* Mobile Link Wrapper (Row with Text + Arrow) */}
              <div className="mobile-only strong mobile-row" onClick={() => toggleMobileSubmenu(key)}>
                <div className="mobile-link">
                  {data.title}
                  <FaChevronRight className="mobile-dropdown-arrow" />
                </div>
              </div>

              {/* MEGA MENU (DESKTOP) & SUBMENU (MOBILE) */}
              {/* Note: In your design, these were separate DOM structures. 
                  We will unify them or render them conditionally. 
                  For cleaner CSS, we can keep the structure similar to what you had 
                  but use shared classes. 
              */}

              <div className={`megamenu-container ${activeMenu === key ? "open" : ""}`}>
                {/* MOBILE HEADER (Back Button) */}
                <div className="mobile-back mobile-only" onClick={(e) => { e.stopPropagation(); setActiveMenu(null); }}>
                  <FaChevronRight style={{ transform: "rotate(180deg)" }} /> Back
                </div>

                <div className="megamenu-content">
                  {/* INTRO SECTION (Desktop Only usually) */}
                  <div className="megamenu-intro desktop-only">
                    <h3>{data.intro.title}</h3>
                    <p>{data.intro.text}</p>
                    {data.intro.link && (
                      <div className="learn-btn" onClick={(e) => handleNavClick(e, data.intro.link)}>
                        <img src={data.intro.icon} alt="icon" />
                        {data.intro.linkText}
                      </div>
                    )}
                  </div>

                  {/* LINKS GRID */}
                  <div className="megamenu-grid">
                    {data.items.map((item, index) => (
                      <div
                        key={index}
                        className="megamenu-link-item"
                        onClick={(e) => handleNavClick(e, item.path, item.external,  item.underDevelopment)}
                      >
                        <h3>
                          {item.title}

                        </h3>
                        {/* Show description only on desktop if desired, or always */}
                        <p className="desktop-only">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}

          <hr className="mobile-only" />

          {/* OTHER STATIC LINKS */}
          <li className="mobile-only weak"><NavLink to="/blog" onClick={closeAll}>Careers</NavLink></li>
          <li className="mobile-only weak"><NavLink to="/careers" onClick={closeAll}>E Campus Login</NavLink></li>
          <li className="mobile-only weak"><NavLink to="/alumni" onClick={closeAll}>Mandatory Discloser</NavLink></li>
          <li className="mobile-only weak"><NavLink to="/contact" onClick={closeAll}>Contact Us</NavLink></li>

          {/* DESKTOP APPLY BUTTON */}
          <li className="desktop-only">
            <a href="/applyNow" className="apply-btn" onClick={closeAll}>Apply Now</a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
