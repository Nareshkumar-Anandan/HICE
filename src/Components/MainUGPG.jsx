import React from 'react';
import '../Styles/MainUGPG.css';
import campusBackground from '../Assets/Subtract.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const departments = [
  {
    id: 1,
    name: "B.E. Computer Science & Engineering",
    duration: "4 Years",
    intake: "120 Students",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "B.E. Electronics & Communication Engineering",
    duration: "4 Years",
    intake: "100 Students",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "B.Tech. Information Technology",
    duration: "4 Years",
    intake: "80 Students",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "B.Tech AI & DS",
    duration: "4 Years",
    intake: "90 Students",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400",
    page: "/programs/mechanical-engineering", // ✅ target route
  },
];

const DepartmentCard = ({ dept, navigateTo }) => {
  return (
    <div className="ugpg-department-card" data-id={dept.id}>
      <div className="ugpg-card-image">
        <img src={dept.image} alt={dept.name} />
        <div className="ugpg-corner-decoration"></div>
      </div>
      <div className="ugpg-card-content">
        <h3 className="ugpg-course-name">{dept.name}</h3>
        <div className="ugpg-course-details">
          <div className="ugpg-detail-item">
            <span className="ugpg-detail-label">Duration:</span>
            <span className="ugpg-detail-value">{dept.duration}</span>
          </div>
          <div className="ugpg-detail-item">
            <span className="ugpg-detail-label">Intake:</span>
            <span className="ugpg-detail-value">{dept.intake}</span>
          </div>
        </div>

        <button
          className="ugpg-click-here-btn"
          onClick={() => navigateTo(dept.page)} // ✅ Calls navigation function
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

const MainUGPG = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const navigateTo = (page) => {
    if (page) {
      navigate(page); // ✅ Go to the given route
      window.scrollTo({ top: 0, behavior: "smooth" }); // optional: scroll to top smoothly
    } else {
      alert("This department page is under development.");
    }
  };

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
            <h1 className="hero-title">About Us</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </a>{" "}
              &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
                Academics
              </a>{" "}
              &gt;{" "}
              <a
                href="/ug-pg-programme"
                style={{ textDecoration: "none", color: "#f4b400" }}
              >
                UG & PG Program
              </a>
            </div>
            <p className="hero-description">
              If you are passionate and driven, explore our current openings
              across Hindusthan Institutions and apply.
            </p>
          </div>
        </div>
      </section>

      <div className="ugpg-container">
        <header className="ugpg-page-header">
          <h1 className="ugpg-main-title">UG & PG Programs</h1>
          <p className="ugpg-subtitle">
            Discover excellence in education across our diverse academic programs
          </p>
        </header>

        <main className="ugpg-departments-grid">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} navigateTo={navigateTo} />
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MainUGPG;
