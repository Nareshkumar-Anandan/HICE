import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";  
import "../Styles/EducationPrograme.css";
import searchIcon from "../Assets/searchIcon.png";
import Vector from "../Assets/vectorEducation.png";
import img1 from "../Assets/hostel.jpg";
import img2 from "../Assets/library.jpg";
import img3 from "../Assets/lab.jpg";
const EducationPrograme = () => {
  const images = [img1, img2, img3];
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
      setFrontIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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

  const backIndex = (frontIndex + 1) % images.length;

  return (
    <div className="edu-wrapper">
      <h2 className="edu-heading">
        <span className="highlight">|</span>WHAT’S YOUR INTEREST?
      </h2>

      <div className="edu-left">
        <p className="edu-desc">
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
          <button className="edu-apply-btn">Apply Now!</button>

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

      <div className="edu-right">
        <div className="edu-frame">
          <img src={images[frontIndex]} alt="front" className="edu-image" />
          <img src={images[backIndex]} alt="back" className="edu-image2" />
          <img src={Vector} alt="vector" className="edu-vector" />
        </div>
      </div>
    </div>
  );
};

export default EducationPrograme;
