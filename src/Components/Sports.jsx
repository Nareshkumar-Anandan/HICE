import React, { useState, useEffect } from 'react';
import { Trophy, Activity, Dumbbell, Users, Flag } from "lucide-react";
import "../Styles/Sports.css";
import campusBackground from "../Assets/Subtract.png";
import LeftImage from '../Assets/hostel.jpg';
import LeftImage2 from '../Assets/hospital.jpg';
import RightImage from '../Assets/Vector/Course-vector.png';
import Footer from './Footer';

const images = [LeftImage, LeftImage2, LeftImage, LeftImage];

const Sports = () => {
  // Gallery modal state (existing)
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) {
        if (event.key === "ArrowLeft") {
          showPrev();
        } else if (event.key === "ArrowRight") {
          showNext();
        } else if (event.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Event lightbox state (NEW, separate from gallery)
  const [eventIndex, setEventIndex] = useState(null);

  const openEventLightbox = (index) => setEventIndex(index);
  const closeEventLightbox = () => setEventIndex(null);

  const showPrevEvent = () =>
    setEventIndex((prev) => (prev > 0 ? prev - 1 : upcoming.length - 1));

  const showNextEvent = () =>
    setEventIndex((prev) => (prev < upcoming.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    const handleKeyDownEvent = (event) => {
      if (eventIndex !== null) {
        if (event.key === "ArrowLeft") showPrevEvent();
        else if (event.key === "ArrowRight") showNextEvent();
        else if (event.key === "Escape") closeEventLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDownEvent);
    return () => window.removeEventListener("keydown", handleKeyDownEvent);
  }, [eventIndex]); // only for event lightbox

  const features = [
    { icon: <Trophy size={32} />, title: "Competitive Teams" },
    { icon: <Activity size={32} />, title: "Outdoor Fields" },
    { icon: <Dumbbell size={32} />, title: "Fitness Centre" },
    { icon: <Users size={32} />, title: "Coaching & Training" },
    { icon: <Flag size={32} />, title: "Events & Tournaments" },
  ];

  // example records (replace with real data later)
  const records = [
    { year: 2024, title: "Intercollegiate Football Champions", highlight: true },
    { year: 2023, title: "State-level Athletics Runner-up" },
    { year: 2022, title: "Basketball Zone Winners" },
    { year: 2021, title: "National-level Weightlifting Medal" },
    { year: 2020, title: "Inter-university Cricket Semi-finalists" },
    { year: 2019, title: "Multiple district-level medals (athletics)" },
  ];

  // sample upcoming events (replace images & data later)
  const upcoming = [
    { date: "2025-01-18", title: "Inter-College Football Cup", img: LeftImage },
    { date: "2025-02-05", title: "Annual Athletics Meet", img: LeftImage2 },
    { date: "2025-03-12", title: "Basketball Tournament", img: LeftImage },
    { date: "2025-04-09", title: "Campus Marathon", img: LeftImage2 },
    { date: "2025-05-20", title: "Swimming Gala", img: LeftImage },
    { date: "2025-06-14", title: "State-Level Volleyball Championship", img: LeftImage2 },
  ];

  return (
    <div className="sports-root">
      {/* Hero Section (UNCHANGED) */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Sports</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "white" }}>Infrastructure</a> &gt;{" "}
              <a href="/sports" style={{ textDecoration: "none", color: "#f4b400" }}>Sports</a>
            </div>
            <p className="hero-description">
              Facilities to nurture athletic talent — grounds, courts and fitness amenities for all students.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section (UNCHANGED classes/markup, updated text) */}
      <section className="why-section">
        <h2 className="why-title" data-aos="fade-up">
          <span className="highlight">|</span> OUR SPORTS
        </h2>
        <div className="why-container">
          <div className="why-left" data-aos="fade-right">
            <div className="why-left-top">
              <img src={LeftImage} alt="Sports" />
            </div>
            <div className="why-left-bottom">
              <img src={LeftImage2} alt="Sports" />
            </div>
            <div className="why-right-bottom">
              <img src={RightImage} alt="Sports" />
            </div>
          </div>

          <div className="why-right" data-aos="fade-right">
            <p>
              Hindusthan actively promotes physical fitness and a strong competitive spirit through its extensive sports facilities. Students are encouraged to participate in both indoor and outdoor games, helping them develop teamwork, discipline, and leadership.
            </p>
            <p>
              The institution supports aspiring athletes with structured coaching, professional guidance, and regular practice sessions. Modern fitness equipment, dedicated trainers, and specialized sports programs help students strengthen their skills.
            </p>
            <p>
              Annual tournaments, inter-collegiate events, and selection trials offer real-world exposure and higher-level competition. Sports are not just activities here—they are an essential part of campus life and student development.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div className="sports-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Sports ${index + 1}`}
            onClick={() => openModal(index)}
            className="sports-photo"
          />
        ))}
      </div>

      {/* Side section (Records + Upcoming Events) */}
      <div className="sports-side-section" aria-label="Sports records and events">
        <div className="sports-side-card sports-records" data-aos="fade-up">
          <div className="sports-side-head">
            <h3>Hindusthan Sports Records</h3>
            <span className="sports-side-sub">Historic achievements & highlights</span>
          </div>

          {/* stats chips */}
          <div className="sports-records-chips">
            <div className="chip">
              <div className="chip-value">54+</div>
              <div className="chip-label">Championships</div>
            </div>
            <div className="chip">
              <div className="chip-value">320+</div>
              <div className="chip-label">Medals</div>
            </div>
            <div className="chip">
              <div className="chip-value">420</div>
              <div className="chip-label">Active Athletes</div>
            </div>
          </div>

          <ul className="sports-records-list">
            {records.map((r, i) => (
              <li key={i} className={`sports-record-item ${r.highlight ? "highlight" : ""}`}>
                <div className="sports-record-left">
                  <strong className="sports-record-year">{r.year}</strong>
                </div>
                <div className="sports-record-right">
                  <div className="sports-record-title">{r.title}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="sports-side-actions">
            <button className="sports-records-btn" aria-label="View full sports records">View Full Records</button>
            <button className="sports-download-btn" aria-label="Download records">Download</button>
          </div>
        </div>

        <div className="sports-side-card sports-events" data-aos="fade-up">
          <div className="sports-side-head">
            <h3>Upcoming Events</h3>
            <span className="sports-side-sub">Posters & quick registration</span>
          </div>

          {/* desktop: grid; mobile: horizontal scroller */}
          <div className="sports-events-area" role="list">
            <div className="sports-events-grid" role="list">
              {upcoming.map((ev, i) => (
                <article key={i} className="sports-event-thumb" role="listitem" tabIndex={0}>
                  <div className="thumb-wrap">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      role="button"
                      tabIndex={0}
                      onClick={() => openEventLightbox(i)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openEventLightbox(i); }}
                    />
                    <div className="event-badge">
                      {new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(ev.date))}
                    </div>
                  </div>
                  <div className="sports-event-meta">
                    <div className="sports-event-title">{ev.title}</div>
                    <div className="sports-event-cta">
                      <button className="sports-register-btn">Register</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="sports-side-actions">
            <button className="sports-events-btn" aria-label="View all events">View All Events</button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="sports-feature-block">
        <div className="sports-features">
          {features.map((feature, index) => (
            <div key={index} className={`sports-feature-item sports-item-${index + 1}`}>
              <div className="sports-icon">{feature.icon}</div>
              <p className="sports-title">{feature.title}</p>
            </div>
          ))}
        </div>

        <div className="sports-circle">
          <h2 className="sports-circle-head">
            Where <br /> <span style={{ color: "#ffbb00ff" }}>Athletes</span> are Made
          </h2>
        </div>
      </div>

      {/* Gallery Modal (existing) */}
      {currentIndex !== null && (
        <div className="sports-modal" onClick={closeModal}>
          <span className="sports-close" onClick={closeModal}>&times;</span>

          <img
            src={images[currentIndex]}
            alt="Full"
            className="sports-modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="sports-left"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </button>

          <button
            className="sports-right"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Event Lightbox (Upcoming Events) - NEW and separate from gallery modal */}
      {eventIndex !== null && (
        <div
          className="sports-event-modal"
          onClick={closeEventLightbox}
          aria-modal="true"
          role="dialog"
        >
          <div className="sports-event-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="event-modal-close" onClick={closeEventLightbox} aria-label="Close">&times;</button>

            <div className="event-modal-body">
              <button
                className="event-modal-arrow event-modal-left"
                onClick={(e) => { e.stopPropagation(); showPrevEvent(); }}
                aria-label="Previous"
              >
                &#10094;
              </button>

              <div className="event-modal-image-wrap">
                <img
                  src={upcoming[eventIndex].img}
                  alt={upcoming[eventIndex].title}
                  className="event-modal-image"
                />
                <div className="event-modal-meta">
                  <div className="event-modal-date">
                    {new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(upcoming[eventIndex].date))}
                  </div>
                  <h3 className="event-modal-title">{upcoming[eventIndex].title}</h3>
                </div>
              </div>

              <button
                className="event-modal-arrow event-modal-right"
                onClick={(e) => { e.stopPropagation(); showNextEvent(); }}
                aria-label="Next"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Sports;
