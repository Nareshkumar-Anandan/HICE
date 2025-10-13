// src/Components/Events.jsx
import React, { useState, useEffect } from "react";
import "../Styles/Event.css";
import event1 from "../Assets/event1.png";
import event2 from "../Assets/lab.jpg";
import event3 from "../Assets/hostel.jpg";
import vectorEvent from "../Assets/vectorEvent.png";

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

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide top
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % eventSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="events-container">
    <div className="events-wrapper">
      <h2 className="events-heading"><span className="highlight">|</span>
        HAPPENINGS AT HINDUSTAN
      </h2>

      {/* Top Section */}
      <div className="events-top">
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
  );
};

export default Events;
