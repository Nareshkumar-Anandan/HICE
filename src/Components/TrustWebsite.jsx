import React from 'react';
import "../Styles/AboutTrust.css";
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';
import TrustVector from "../Assets/Vector/TrustVector.png"
import LeftImage from "../Assets/lab.jpg";
import LeftImage1 from "../Assets/library.jpg";
//Trustee Images
import KannaiyanImg from "../Assets/Trustee/Kannaiyan.png"
import PriyaImg from "../Assets/Trustee/PriyaMam.png";
import SakthivelRajaImg from "../Assets/Trustee/RajaSir.png";
import SaraswathyImg from "../Assets/Trustee/SaraswathyMam.png";
import TrustVector2 from "../Assets/Vector/TrustVector2.png";
const TrustWebsite = () => {
  return (
    <div className="trust-website">
          {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-background">
                <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
              </div>
      
              <div className="hero-content">
      
                {/* Hero Text */}
                <div className="hero-text">
                  <h1 className="hero-title">Our Trustee</h1>
                  <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a> &gt; <a href="/about-us" style={{ textDecoration:"none", color:"white"}}>About Us</a>
                  {" "}
              &gt;{" "}
              <a href="/aboutTrust" style={{ textDecoration: "none", color: "#f4b400" }}>
                About Trust
              </a></div>
                  <p className="hero-description">
                    If you are passionate and driven, explore our current openings across
                    Hindusthan Institutions and apply.
                  </p>
                </div>
              </div>
            </section>
      
    
      {/* About Trust Section */}
      <section className="about-trust">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <div className="about-title">
                <h2> <span className="highlight">|</span>ABOUT THE TRUST</h2>
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

      {/* Founder & Chairman Section */}
      <section className="trustee-section-banner">
        {/* Decorative design removed */}
        <div className="profile-content">
          <div className="decorative-design-right">
             <img src={TrustVector2} alt="Decorative background" />
          </div>
          <div className="profile-image-container">
            <img 
              src={KannaiyanImg}
              alt="T.S.R. Kannaiyan" 
              className="profile-image"
            />
          </div>
          <div className="profile-text-wrapper">
            <div className="profile-header">
              <h3><span className="highlight">|</span>Founder & chairman</h3>
            </div>
            <div className="quote">
              "Bringing the best in the industry to this competitive world"
            </div>
            <div className="profile-name">
               - Shri.T.S.R. Khannaiyann
            </div>
          </div>
        </div>
      </section>

      {/* Biography Text Section */}
      <section className="biography-section">
        <div className="biography-content">
          <p>
           Shri. T.S.R. Khannaiyann, originating from a humble agricultural background, has transformed into a dynamic entrepreneur through determination and the support of his well-wishers. In the early 1970s, he embarked on his career as a trader of Electro-Mechanical Equipment. Driven by a passion to serve a greater purpose in business, he founded a Transformer manufacturing industry in Coimbatore, rapidly establishing himself as a leader in the Transformer Industry.
          </p>
          <p>
            Under his visionary leadership, the Hindusthan Group of Companies expanded into various sectors, including Electrical, Electronics, Computer, Chemical, and Mechanical Engineering. Shri. T.S.R. Khannaiyann's entrepreneurial journey is marked by a relentless pursuit of excellence and innovation.
          </p>
          <p>
            In 1992, after achieving remarkable success in the industry, Shri. T.S.R. Khannaiyann founded the Hindusthan Educational and Charitable Trust to serve the poor, needy, and downtrodden. His exceptional managerial acumen, combined with his dedication to social causes, has guided the Trust to new heights. His leadership is a testament to his visionary outlook and commitment to making a positive impact.
          </p>
          <p>
            Shri. T.S.R. Khannaiyann's dedication is further strengthened by the support of his wife, Smt. T.R.K. Sarasuwathi, his son, E.t. K. Sakthivel, and his daughter, Dr. K. Priya. Together, they have played a crucial role in expanding the institutions under his chairmanship, ensuring that the Hindusthan Group continues to grow as a conglomerate.
          </p>
          <p>
            Driven by his enduring passion for "Bringing the best in the industry to this competitive world," Shri. T.S.R. Khannaiyann continues to inspire and lead the Hindusthan Empire.
          </p>
        </div>
      </section>

      {/* Managing Trustee Profile Banner */}
      <section className="profile-section light-teal trustee-banner-profile">
        <div className="profile-content">
          <div className="decorative-design-left">
             <img src={TrustVector2} alt="Decorative background" />
          </div>
          <div className="profile-image-container">
            <img 
              src={SaraswathyImg}
              alt="Smt. Sarasuwathi Khannaiyann" 
              className="profile-image"
            />
          </div>
          <div className="profile-text-wrapper">
            <div className="profile-header">
              <h3><span className="highlight">|</span>MANAGING TRUSTEE</h3>
            </div>
            <div className="quote">
              "Bringing the best in the industry to this competitive world"
            </div>
            <div className="profile-name">
               Smt. Sarasuwathi Khannaiyann -
            </div>
          </div>
        </div>
      </section>

      {/* Biography Text Section */}
      <section className="biography-section">
        <div className="biography-content">
          <p>
            Smt. T.R.K. Sarasuwathi, originating from an agricultural family, transformed herself into a dynamic woman under the guidance and encouragement of her grandmother. Throughout her journey, she has been a pillar of support and strength to her husband, Shri. T.S.R. Khannaiyann, as they pursued a greater purpose in business and service.
          </p>
          <p>
            With a deep belief that happiness lies in giving and serving others, Smt. T.R.K. Sarasuwathi has consistently given back to the society she is a part of. Her contributions are vast, including the initiation of eco-friendly projects, the introduction of welfare schemes for employees, and the development of programs aimed at uplifting rural and underprivileged communities by enhancing their educational opportunities.
          </p>
          <p>
            She has been instrumental in providing scholarships to students from economically weaker sections, ensuring access to quality education for those in need. Her service extends to adopting primary schools and health care centers, where she works tirelessly to improve the quality of service provided.
          </p>
          <p>
            Smt. T.R.K. Sarasuwathi's journey is one of forging new paths and leaving a legacy of excellence. Under her guidance, numerous institutions have flourished, reflecting her unwavering commitment to education and community welfare.
          </p>
          <p>
            Her strength is not merely measured by the hardships she has faced but by her ability to overcome them with grace and courage. Smt. T.R.K. Sarasuwathi embodies the spirit of a compassionate leader, unafraid to be herself and driven by a desire to make a lasting impact.
          </p>
        </div>
      </section>

      {/* Trustee Section */}
      <section className="trustee-section-banner">
        {/* Decorative design removed */}
        <div className="profile-content">
          <div className="decorative-design-right">
             <img src={TrustVector2} alt="Decorative background" />
          </div>
          <div className="profile-image-container">
            <img 
              src={SakthivelRajaImg}
              alt="K. Sakthivel" 
              className="profile-image"
            />
          </div>
          <div className="profile-text-wrapper">
            <div className="profile-header">
              <h3><span className="highlight">|</span>TRUSTEE</h3>
            </div>
            <div className="quote">
              "Bringing the best in the industry to this competitive world"
            </div>
            <div className="profile-name">
              - K. Sakthivel
            </div>
          </div>
        </div>
      </section>

      {/* Biography Text Section */}
      <section className="biography-section">
        <div className="biography-content">
          <p>
            Graduating as an engineer, he quickly emerged as an outstanding young administrator, creating a significant impact on youth education. By immersing himself in the administration of the educational institutions within the group, he has played a pivotal role in their development and success.
          </p>
          <p>
            His enthusiasm and energy as an engineer have driven him to lead transformative changes, motivating the youth to actively participate in all aspects of institutional functioning. Through his visionary leadership, he has ensured the phenomenal growth and success of these educational institutions.
          </p>
        </div>
      </section>

      {/* Executive Trustee & Secretary Section */}
      <section className="profile-section light-teal trustee-banner-profile">
        {/* Decorative design removed */}
        <div className="profile-content">
          <div className="decorative-design-left">
             <img src={TrustVector2} alt="Decorative background" />
          </div>
          <div className="profile-image-container">
            <img 
              src={PriyaImg} 
              alt="Dr. K. Priya" 
              className="profile-image"
            />
          </div>
          <div className="profile-text-wrapper">
            <div className="profile-header">
              <h3><span className="highlight">|</span>EXECUTIVE TRUSTEE & SECRETARY</h3>
            </div>
            <div className="quote">
              "Bringing the best in the industry to this competitive world"
            </div>
            <div className="profile-name">
              Dr. K. Priya -
            </div>
          </div>
        </div>
      </section>

      <section className="biography-section">
        <div className="biography-content">
          <p>
            Dr. K. Priya, a distinguished rank holder in Engineering with an MBA and a Doctorate in Management, plays a pivotal role in the day-to-day management of the institutions under the Hindusthan Banner. With over 15 years of experience in the educational field, she has successfully managed 8 colleges and 3 schools, bringing a wealth of expertise to the administration.
          </p>
          <p>
            As the Executive Trustee and Secretary, Dr. K. Priya has followed in the footsteps of her parents, leading innovative schemes that significantly benefit both students and staff. Her unwavering passion for quality education has driven her to establish state-of-the-art facilities across Hindusthan Educational Institutions.
          </p>
          <p>
            Her deep respect for human values and encouragement of innovative ideas have been crucial in fostering growth and development within the institutions. Dr. K. Priya is committed to her long-term vision of elevating Hindusthan Institutions to international standards, ensuring excellence in infrastructure, equipment, and faculty.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default TrustWebsite;