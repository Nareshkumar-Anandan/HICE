import React from 'react';
import '../Styles/AcademicsMech.css';
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';
import LeftImage from '../Assets/hospital.jpg';
import LeftImage1 from '../Assets/lab.jpg';
import TrustVector from '../Assets/Vector.png';
import crown from '../Assets/Vector/Crown.png';
import courseVector from '../Assets/Vector/Course-vector.png';
const InformationTech = () => {
  return (
    <>
      {/* Main Content */}
      <section className="hero-section">
                               <div className="hero-background">
                                 <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                               </div>
                       
                               <div className="hero-content">
                       
                                 {/* Hero Text */}
                                 <div className="hero-text">
                                   <h1 className="hero-title">Our Courses</h1>
                                   <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Academics</a> &gt; <a href='/ug-pg-programme'>UG programme</a> &gt; <a style={{ textDecoration:"none", color:"#f4b400"}}>Courses</a></div>
                                   <p className="hero-description">
                                     If you are passionate and driven, explore our current openings across
                                     Hindusthan Institutions and apply.
                                   </p>
                                 </div>
                               </div>
                             </section>
          <section className="about-trust">
                <div className="container">
                  <div className="about-content">
                    <div className="about-left">
                      <div className="about-title">
                        <h2> <span className="highlight">|</span>Department of Artificial Intelligence and Data Science</h2>
                      </div>
                      <div className="about-image-container">
                        <div className="image-placeholder">
                          <img src={LeftImage} alt="Trustee-image" />
                        </div>
                       <div className="image-placeholder1">
                        <img src={LeftImage1} alt="Trustee image" />
                       </div>
                       <div className='trust-vector'>
                        <img src={TrustVector} alt="Decorative Frame" />
                       </div>
                      </div>
                    </div>
                    <div className="about-right">
                      <p>
                        Hindusthan Educational and Charitable Trust, one 
                        of the finest in education and teaching is strategically placed in
                         the heart of the city, and since 1992 has established itself firmly in the fields of Arts, Science, Education and Technical Education. The Trust aims at providing 
                         education that is world-class and on par with global standards. The Trust firmly believes
                          in education from "Pre-KG to Ph.D" and is true to its motto – "Get the best in everything". The Management
                           has always stood by its commitment to the betterment of the student community and had at first established itself as a brand in the 'power sector', and today in the field of Education has reigned supreme with the 'Life Time Education Achievement Award' for giving back to society. The Management believes in leading and has set new trends/ innovative training methodologies in all its institutions that will assist students towards the road to success.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
          
        
        <div className="courses-container">
            <div className="courses-card">
              <h3>Foundation And Vision</h3>
              <ul><li>To provide intellectual environment that fosters the search for
                new knowledge in a highly dynamic computing world and to fine
                tune graduate research attributes and inculcate research
                interest among the students to pursue higher education.</li></ul>
            </div>
            <div className="courses-card">
              <h3>Entry Requirements</h3>
              <ul>
                <li>
                  The student must have passed Class 12th from a recognised
                  board.
                </li>
                <li>
                  Students from any recognized stream (Science, Commerce, Arts)
                  are eligible.
                </li>
              </ul>
            </div>
            <div className="courses-card">
              <h3>Course Duration And Intake</h3>
              <ul>
                <li>3 Years</li>
                <li>180 Intakes</li>
              </ul>
            </div>
            <div className="courses-card">
              <h3>Industry Recognition</h3>
             <ul><li> Our BCA course is recognised by DBT Star college scheme. We also
                have an Industry Integrated Course with GOOGLE Technologies.</li></ul>
            </div>
            <div className="courses-center-icon">
              <span><img src={crown} alt="" /></span> 
            </div>
          </div>

      {/* Faculty Section */}
      <section className="faculty-section">
        <div className="container">
          <div className="faculty-header">
            <div className="faculty-title-bar">
              <h2><span className='highlights'>|</span>FACULTY MEMBERS</h2>
            </div>
          </div>
          
          <div className="faculty-grid">        
            <div className="faculty-card">
              <div className="staff-image-container">
                 
              </div>
              <div className="small-frame"> 
                <img src={courseVector} alt="Decorative" /> 
              </div>
              <div className="faculty-info">
                <h4>Staff Name</h4>
                <p>Designation And Role</p>
              </div>
            </div>
            
            
            <div className="faculty-card">
              <div className="staff-image-container">
                 
              </div>
              <div className="small-frame"> 
                <img src={courseVector} alt="Decorative" /> 
              </div>
              <div className="faculty-info">
                <h4>Staff Name</h4>
                <p>Designation And Role</p>
              </div>
            </div>
            
            
            <div className="faculty-card">
              <div className="staff-image-container">
                 
              </div>
              <div className="small-frame"> 
                <img src={courseVector} alt="Decorative" /> 
              </div>
              <div className="faculty-info">
                <h4>Staff Name</h4>
                <p>Designation And Role</p>
              </div>
            </div>
            
            
            <div className="faculty-card">
              <div className="staff-image-container">
                 
              </div>
              <div className="small-frame"> 
                <img src={courseVector} alt="Decorative" /> 
              </div>
              <div className="faculty-info">
                <h4>Staff Name</h4>
                <p>Designation And Role</p>
              </div>
            </div>
            
            
            <div className="faculty-card">
              <div className="staff-image-container">
                 
              </div>
              <div className="small-frame"> 
                <img src={courseVector} alt="Decorative" /> 
              </div>
              <div className="faculty-info">
                <h4>Staff Name</h4>
                <p>Designation And Role</p>
              </div>
            </div>
            
            
            <div className="faculty-card">
              <div className="staff-image-container">
                 
              </div>
              <div className="small-frame"> 
                <img src={courseVector} alt="Decorative" /> 
              </div>
              <div className="faculty-info">
                <h4>Staff Name</h4>
                <p>Designation And Role</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default InformationTech;