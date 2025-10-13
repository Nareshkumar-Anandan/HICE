import React, { useEffect, useState } from "react";
import "../Styles/Counter.css";
import StudentIcon from "../Assets/Vector/StudentsIcon.png";
import AlumniIcon from "../Assets/Vector/AlumniIcon.png";
import StaffIcon from "../Assets/Vector/StaffIcon.png";
import AchievementIcon from "../Assets/Vector/AchievementsIcon.png";

const Counter = () => {
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
    <div className="counter-wrapper">
      {countersData.map((counter, index) => (
        <div className="counter-box" key={counter.id}>
          <img src={counter.img} alt={counter.label} className="counter-icon" />
          <h2>{counts[index]}+</h2>
          <p>{counter.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
