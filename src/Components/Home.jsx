
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";  
import { CircleArrowRight } from 'lucide-react';
import searchIcon from "../Assets/searchIcon.png";
import Vector from "../Assets/vectorEducation.png";
import img1 from "../Assets/hostel.jpg";
import img2 from "../Assets/library.jpg";
import img3 from "../Assets/lab.jpg";
import "../Styles/Home.css";
import CampusVideo from "../Assets/DJI_0015 (1).mov"; // replace with your actual campus video
import LeftImage from "../Assets/hostel.jpg"; // replace with your actual image
import LeftImage2 from "../Assets/library.jpg"; // replace with your actual image
import RightImage from "../Assets/Frame.png"; // replace with your actual image
import Footer from "./Footer";
import CampusImage from "../Assets/360..png";
import Highlights from "./Highlights";
import Placements from "./Placements";
// Import multiple images
import AboutImg1 from "../Assets/library.jpg";
import AboutImg2 from "../Assets/hostel.jpg";
import AboutImg3 from "../Assets/lab.jpg";
import AboutVectorTop from "../Assets/aboutvector2.png";
import AboutVectorBottom from "../Assets/aboutvector1.png";
// Event Page data
import "../Styles/Event.css";
import event1 from "../Assets/event1.png";
import event2 from "../Assets/lab.jpg";
import event3 from "../Assets/hostel.jpg";
import vectorEvent from "../Assets/vectorEvent.png";

//HICE Infra

import classroomImg from "../Assets/hostel.jpg";
import libraryImg from "../Assets/library.jpg";
import labImg from "../Assets/lab.jpg";
import orchardImg from "../Assets/hostel.jpg";
import flexibleImg from "../Assets/lab.jpg";
import playgroundImg from "../Assets/hostel.jpg";
import ClassRoomVector from "../Assets/Vector/ClassRoomvector.png";
import LibraryVector from "../Assets/Vector/LibraryVector.png";
import LabVector from "../Assets/Vector/LabVector.png";
import OrchardVector from "../Assets/Vector/OrchardVector.png";
import PlaygroundVector from "../Assets/Vector/PlaygroundVector.png";
import EducationVector from "../Assets/Vector/EducationVector.png";

//Counter Component
import "../Styles/Counter.css";
import StudentIcon from "../Assets/Vector/StudentsIcon.png";
import AlumniIcon from "../Assets/Vector/AlumniIcon.png";
import StaffIcon from "../Assets/Vector/StaffIcon.png";
import AchievementIcon from "../Assets/Vector/AchievementsIcon.png";

const Home = () => {
   const images = [AboutImg1, AboutImg2, AboutImg3]; // Array of images
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleArrowClick = (direction) => {
      if (direction === "left") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };
     const images2 = [img1, img2, img3];
  const [frontIndex, setFrontIndex] = useState(0);
  const navigate = useNavigate();

  const allCourses = [
    "Bachelor of Engineering",
    "Bachelor of Technology",
  ];

  const relatedCourses = {
    "Bachelor of Technology": [
      "Information Technology",
      "Artificial Intelligence & Data Science",
    ],
    "Bachelor of Engineering": [
      "Mechanical Engineering",
      "Civil Engineering",
    ],
  };

  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  const containerRef = useRef(null); // ✅ wrap search & related courses

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredCourses([]);
    } else {
      const results = allCourses.filter((course) =>
        course.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(results.length > 0 ? results : ["No programs found"]);
    }
  };

  const handleCourseClick = (course) => {
    if (course === "No programs found") return;

    // Clear search results
    setFilteredCourses([]);
    setQuery("");

    if (relatedCourses[course]) {
      setSelectedCourse(course); // show related courses
    } else {
      setSelectedCourse(""); // hide related courses
      navigate(`/programs/${course.replace(/\s+/g, "-").toLowerCase()}`);
    }
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % images2.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images2.length]);

  // ✅ Click outside to hide search and related courses
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setFilteredCourses([]);
        setSelectedCourse("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const backIndex = (frontIndex + 1) % images2.length;

  // Event page data 

  const eventSlides = [
    {
      img: event1,
      title: `Department Of Commerce (Information Technology) And Commerce (Banking & Insurance) Organises Career Awareness Programme “Passport To Success: A Study Abroad And Career Awareness Initiative”`,
      guest: "Mrs. S. Nagalakshmi Krishnan",
      role: "Vice President – Academics, Career Zone Consulting Pvt Ltd.",
      date: "8.8.2025",
      time: "10:30 AM Onwards",
      venue: "Ashoka Hall",
    },
    {
      img: event2,
      title: `Department of Management Studies Organises Expert Talk on “Emerging Trends in Entrepreneurship and Innovation”`,
      guest: "Dr. R. Karthikeyan",
      role: "Founder & CEO, StartUp Hub India",
      date: "12.09.2025",
      time: "11:00 AM Onwards",
      venue: "Seminar Hall – I",
    },
    {
      img: event3,
      title: `School of Computer Science Conducts Workshop on “AI and Data Science for Future Careers”`,
      guest: "Ms. Priya Anand",
      role: "Senior Data Scientist, TechNova Analytics",
      date: "20.09.2025",
      time: "9:30 AM – 1:00 PM",
      venue: "Central Auditorium",
    },
  ];
   const [activeIndex, setActiveIndex] = useState(0);
  
    // Auto slide top
    useEffect(() => {
      const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % eventSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);

    // Counter Component

    const countersData = [
        { id: 1, img: StudentIcon, number: 500, label: "HAPPY STUDENTS" },
        { id: 2, img: AlumniIcon, number: 100, label: "SUCCESSFUL ALUMNI" },
        { id: 3, img: StaffIcon, number: 100, label: "DEDICATED STAFF" },
        { id: 4, img: AchievementIcon, number: 200, label: "ACHIEVEMENTS" },
      ];
    
      const [counts, setCounts] = useState(countersData.map(() => 0));
    
      useEffect(() => {
        countersData.forEach((counter, index) => {
          let start = 0;
          const end = counter.number;
          const duration = 2000; // animation duration in ms
          const stepTime = Math.max(Math.floor(duration / end), 1);
    
          const timer = setInterval(() => {
            start += 1;
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = start;
              return newCounts;
            });
    
            if (start === end) clearInterval(timer);
          }, stepTime);
        });
      }, []);
  return (
    <div>
    <div className="home">
      {/* Background Video */}
      <video
        className="home-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={CampusVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="home-overlay"></div>

      {/* Campus Tour Section */}
      <div className="home-content">
        <div className="campus-tour">
          <img src={CampusImage} alt="Campus Icon" className="campus-icon" />
        </div>
      </div>
      
    </div>
    
    
    
    <section className="about-section">
          <div className="about-vector1">
              <img src={AboutVectorTop} alt="vector" />
            </div>
          {/* Heading */}
          <div className="about-header">
            <h2  data-aos="fade-up">
              <span className="highlight">DISCOVER YOUR WINGS</span>
            </h2>
            <p data-aos="fade-up">Hindusthan College, a place for everyone...</p>
          </div>
           
    
          {/* Content Box */}
          <div className="about-box-home">
            {/* Left Image */}
            <div className="about-image">
              <img src={images[currentIndex]} alt="About hindusthan " />
            </div>
           
            {/* Right Text Content */}
            <div className="about-text-first">
              <h3>
                <span className="highlight">OUR HICE FAMILY</span>
              </h3>
              <p  data-aos="fade-left">
                The Hindusthan Institute of Commerce and Education (HICE), Ingur Campus, 
                is a part of Hindusthan Educational Institutions, known for its excellence in academics and student development. 
                The campus provides a holistic environment that blends education, innovation, 
                and values. With modern facilities and dedicated faculty,
                 HICE ensures students are well-prepared for their future.
              </p>
              <p  data-aos="fade-left">
                The campus is located in a peaceful setting at Ingur, fostering discipline,
                 creativity, and innovation. It offers career-oriented programs 
                 to prepare students for a successful future.
              </p>
    
              {/* Button */}
              <button className="view-btn" onClick={()=>{
                {navigate("/aboutHICE");
              }}} >
                View all <span>↗</span>
              </button>
              <div className="about-vector2">
              <img src={AboutVectorBottom} alt="vector" />
            </div>
            </div>
            
    
            {/* Navigation Arrows */}
            <button
              className="nav-arrow left"
              onClick={() => handleArrowClick("left")}
            >
              ←
            </button>
            <button
              className="nav-arrow right"
              onClick={() => handleArrowClick("right")}
            >
              →
            </button>
          </div>
        </section>
        {/* WHY HINDUSTHAN SECTION */}
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
         <div className="edu-wrapper">
              <h2 className="edu-heading"  data-aos="fade-up">
                <span className="highlight">|</span>WHAT’S YOUR INTEREST?
              </h2>
        
              <div className="edu-left">
                <p className="edu-desc"  data-aos="fade-up">
                  Setting new trends, introducing innovative training methodologies and
                  guiding our students towards the road to success is what we sincerely
                  aim at and by inculcating quality education in promoting various types
                  of Educational Institutions.
                </p>
        
                <div className="edu-search-row" ref={containerRef}>
                  <div className="edu-search-box">
                    <img src={searchIcon} alt="search" className="edu-search-icon" />
                    <input
                      type="text"
                      value={query}
                      onChange={handleSearch}
                      placeholder="Search for Programs"
                      className="edu-search-input"
                    />
                  </div>
                  <span className="edu-or">OR</span>
                  <button className="edu-apply-btn"  onClick={() => navigate("/applyNow")}
                             style={{ cursor: "pointer" }}>Apply Now!</button>
        
                  {query.trim() !== "" && filteredCourses.length > 0 && (
                    <ul className="edu-search-results">
                      {filteredCourses.map((course, index) => (
                        <li
                          key={index}
                          className={`edu-course-item ${
                            course === "No programs found" ? "no-result" : ""
                          }`}
                          onClick={() => handleCourseClick(course)}
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  )}
        
                  {selectedCourse && relatedCourses[selectedCourse] && (
                    <ul className="edu-related-courses">
                      {relatedCourses[selectedCourse].map((course, idx) => (
                        <li key={idx} onClick={() => handleCourseClick(course)}>
                          {course}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
        
                <ul className="edu-programs">
                  <li>Under Graduate Programmes</li>
                  <li>Post Graduate Programmes</li>
                </ul>
              </div>
        
              <div className="edu-right"  data-aos="fade-right">
                <div className="edu-frame">
                  <img src={images2[frontIndex]} alt="front" className="edu-image" />
                  <img src={images2[backIndex]} alt="back" className="edu-image2" />
                  <img src={Vector} alt="vector" className="edu-vector" />
                </div>
              </div>
            </div>
    {/* Event Section */}
    <div className="events-container">
        <div className="events-wrapper">
          <h2 className="events-heading" data-aos="fade-up"><span className="highlight">|</span>
            HAPPENINGS AT HINDUSTAN
          </h2>
    
          {/* Top Section */}
          <div className="events-top" data-aos="fade-up">
            <div className="event-img-box">
              <img
                src={eventSlides[activeIndex].img}
                alt="Event"
                className="event-main-img"
              />
            </div>
            <div className="event-text-box">
              <p>{eventSlides[activeIndex].title}</p>
              {eventSlides[activeIndex].guest && (
                <>
                  <p><b>Chief Guest:</b> {eventSlides[activeIndex].guest}</p>
                  <p>{eventSlides[activeIndex].role}</p>
                  <p><b>Date:</b> {eventSlides[activeIndex].date}</p>
                  <p><b>Time:</b> {eventSlides[activeIndex].time}</p>
                  <p><b>Venue:</b> {eventSlides[activeIndex].venue}</p>
                </>
              )}
            </div>
          </div>
           <div className="vector-Event">
              <img src={vectorEvent} alt="vector" />
            </div>
          {/* Dots + Vector */}
          <div className="dots-box">
           
            {eventSlides.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              ></span>
            ))}
          </div>
    
          
        </div>
        {/* Bottom Auto Scrolling */}
          <div className="events-bottom">
           <div className="scroll-track">
            {eventSlides.map((slide, idx) => (
              <div className="scroll-card" key={idx}>
                <img src={slide.img} alt={`Event ${idx}`} className="event-image" />
                <div className="event-title-box">
                  <p>{slide.title}</p>
                </div>
              </div>
            ))}
    
            {/* Duplicate set for infinite scroll */}
            {eventSlides.map((slide, idx) => (
              <div className="scroll-card" key={`dup-${idx}`}>
                <img src={slide.img} alt={`Event duplicate ${idx}`} className="event-image" />
                <div className="event-title-box">
                  <p>{slide.title}</p>
                </div>
              </div>
            ))}
          </div>
            {/* Arrow buttons */}
            <div className="arrow-buttons">
            <button className="arrow-left">←</button>
            <button className="arrow-right">→</button>
            </div>
          </div>
        </div>
        <div className="hind-wrapper">
              {/* Header Section */}
              <div className="hind-header">
                <div className="hind-title">
                  <h1>
                    LIFE AT <br /><span>HINDUSTHAN</span>
                  </h1>
                  <p>
                    Experience vibrant campus life at Hindusthan College of Arts and Science,
                    where learning meets culture, innovation, and community.
                  </p>
                </div>
              </div>
        
              {/* Content Grid */}
             <div className="hind-grid">
  <div className="hind-card">
    <img src={classroomImg} alt="Classrooms" />
    <div className="hind-overlay">
      <img src={ClassRoomVector} alt="Classroom Vector" className="vector-icon" />
      <h3>CLASSROOMS</h3>
      <p>
        Spacious, well-equipped spaces fostering engaging and effective
        learning.
      </p>
      <h4><a href="/classroom" className="explore-btn">Explore Now<CircleArrowRight size={44}/></a></h4>
    </div>
  </div>

  <div className="hind-card">
    <img src={libraryImg} alt="Library" />
    <div className="hind-overlay">
      <img src={LibraryVector} alt="Library Vector" className="vector-icon" />
      <h3>LIBRARY</h3>
      <p>
        Rich collection supporting learning, research, and academic
        excellence daily.
      </p>
      <h4><a href="#" className="explore-btn">Explore Now <CircleArrowRight size={44}/></a></h4>
    </div>
  </div>

  <div className="hind-card">
    <img src={labImg} alt="Laboratory" />
    <div className="hind-overlay">
      <img src={LabVector} alt="Lab Vector" className="vector-icon" />
      <h3>LABORATORY</h3>
      <p>
        Modern, equipped labs enabling practical skills and innovative
        experiments.
      </p>
      <h4><a href="#" className="explore-btn">Explore Now <CircleArrowRight size={44}/></a></h4>
    </div>
  </div>

  <div className="hind-card">
    <img src={orchardImg} alt="The Orchard" />
    <div className="hind-overlay">
      <img src={OrchardVector} alt="Orchard Vector" className="vector-icon" />
      <h3>THE ORCHARD</h3>
      <p>
        Our cafeteria is a great place to catch up with friends over lunch.
      </p>
      <h4><a href="#" className="explore-btn">Explore Now <CircleArrowRight size={44}/></a></h4>
    </div>
  </div>

  <div className="hind-card">
    <img src={flexibleImg} alt="Flexible Learning Spaces" />
    <div className="hind-overlay">
      <img src={EducationVector} alt="Education Vector" className="vector-icon" />
      <h3>FLEXIBLE LEARNING SPACES</h3>
      <p>
        Allow teachers to develop innovative curriculum and pedagogy.
      </p>
      <h4><a href="#" className="explore-btn">Explore Now <CircleArrowRight size={44}/></a></h4>
    </div>
  </div>

  <div className="hind-card">
    <img src={playgroundImg} alt="Play Grounds" />
    <div className="hind-overlay">
      <img src={PlaygroundVector} alt="Playground Vector" className="vector-icon" />
      <h3>PLAY GROUNDS</h3>
      <p>
        Landscaped gardens provide beautiful recreational and outdoor
        learning spaces.
      </p>
      <h4><a href="#" className="explore-btn">Explore Now<CircleArrowRight size={44}/></a></h4>
    </div>
  </div>
</div>

            </div>
            {/* Counter Component */}

             <div className="counter-wrapper">
      {countersData.map((counter, index) => (
        <div className="counter-box" key={counter.id}>
          <img src={counter.img} alt={counter.label} className="counter-icon" />
          <h2>{counts[index]}+</h2>
          <p>{counter.label}</p>
        </div>
      ))}
    </div>
    <Placements/>
    <Highlights/>
    <Footer/>
    </div>
  );
};

export default Home;
