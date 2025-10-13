import React from "react";
import "../Styles/Hindusthanians.css";
// Import your images
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

const Hindusthanins = () => {
  return (
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
          </div>
        </div>

        <div className="hind-card">
          <img src={libraryImg} alt="Library" />
          <div className="hind-overlay">
             <img src={LibraryVector} alt="Classroom Vector" className="vector-icon" />
            <h3>LIBRARY</h3>
            <p>
              Rich collection supporting learning, research, and academic
              excellence daily.
            </p>
          </div>
        </div>

        <div className="hind-card">
          <img src={labImg} alt="Laboratory" />
          <div className="hind-overlay">
             <img src={LabVector} alt="Classroom Vector" className="vector-icon" />
            <h3>LABORATORY</h3>
            <p>
              Modern, equipped labs enabling practical skills and innovative
              experiments.
            </p>
          </div>
        </div>

        <div className="hind-card">
          <img src={orchardImg} alt="The Orchard" />
          <div className="hind-overlay">
             <img src={OrchardVector} alt="Classroom Vector" className="vector-icon" />
            <h3>THE ORCHARD</h3>
            <p>
              Our cafeteria is a great place to catch up with friends over lunch.
            </p>
          </div>
        </div>

        <div className="hind-card">
          <img src={flexibleImg} alt="Flexible Learning Spaces" />
          <div className="hind-overlay">
             <img src={EducationVector} alt="Classroom Vector" className="vector-icon" />
            <h3>FLEXIBLE LEARNING SPACES</h3>
            <p>
              Allow teachers to develop innovative curriculum and pedagogy.
            </p>
          </div>
        </div>

        <div className="hind-card">
          <img src={playgroundImg} alt="Play Grounds" />
          <div className="hind-overlay">
             <img src={PlaygroundVector} alt="Classroom Vector" className="vector-icon" />
            <h3>PLAY GROUNDS</h3>
            <p>
              Landscaped gardens provide beautiful recreational and outdoor
              learning spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hindusthanins;
