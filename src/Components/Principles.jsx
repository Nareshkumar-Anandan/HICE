import React from 'react'
import "../Styles/Principles.css";
import campusBackground from '../Assets/Subtract.png';
import LeftImage from "../Assets/hostel.jpg";
import LeftImage2 from "../Assets/hospital.jpg";
import RightImage from '../Assets/Vector.png';
import Footer from './Footer';
function Principles() {
  return (
    <>
     <section className="hero-section">
                          <div className="hero-background">
                            <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                          </div>
                  
                          <div className="hero-content">
                  
                            {/* Hero Text */}
                            <div className="hero-text">
                              <h1 className="hero-title">Principle Desk</h1>
                              <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a>{" "} &gt; {" "}<a href="/about-us" style={{ textDecoration:"none", color:"white"}}>About Us</a>
                              {" "} &gt; {" "}<a href="/principal-desk" style={{ textDecoration:"none", color:"#f1c40f"}}>Principle's Desk</a>
                              </div>
                              <p className="hero-description">
                                If you are passionate and driven, explore our current openings across
                                Hindusthan Institutions and apply.
                              </p>
                            </div>
                          </div>
                        </section>
    <section className="why-section">
                 <h2 className="why-title"  data-aos="fade-up">
                    <span className="highlight">|</span> ABOUT THE PRINCIPAL
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
                   <h2  data-aos="fade-up">
                    <span className="highlight-head">|</span> Dr.C.Rameshkumar M.Tech (IIT-Delhi) MBA PhD

                  </h2>
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
            <section className="principal-container">
                <div className="principal-message">
                    <h2 data-aos = "fade-down"><span className='highlights'>|</span>What our Principal Says</h2>
                    <div className="principal-hypothesize">
                        <p data-aos ="fade-up">It gives me immense pleasure to welcome you all to <b>Hindusthan College of Engineering, Ingur, Perundurai, Erode</b> — a place where dreams are shaped, talents are nurtured, and futures are built.
</p>
                         <p data-aos ="fade-up">With the establishment of this institution under the <b>Hindusthan Educational and Charitable Trust,</b> we take pride in creating yet another temple of learning dedicated to excellence. Our commitment lies in setting new benchmarks, introducing innovative teaching methodologies, and guiding students on the path to success through quality education.
</p>
                          <p data-aos ="fade-up">Having successfully completed your Higher Secondary School, you now stand at the threshold of an exciting new chapter — your journey into the world of engineering. This marks more than just an academic transition; it is a transformational phase where you will evolve into skilled professionals and responsible citizens capable of addressing both societal and technological challenges.
</p>
                           <p data-aos ="fade-up">At Hindusthan, we believe that <b>education is not just about learning facts, but about igniting curiosity, building character, and shaping a vision.</b> Our experienced faculty, state-of-the-art laboratories, modern teaching methods, and dynamic campus environment are all geared to provide you with a holistic education — one that prepares you for both career success and personal growth.
</p>
                            <p data-aos ="fade-up">I encourage each of you to stay inquisitive, be proactive, and immerse yourself in every learning opportunity — both inside and outside the classroom. Take part actively in <b>academic, co-curricular, and extra-curricular activities.</b> These experiences will not only strengthen your technical skills but also enhance your creativity, communication, and leadership qualities.
</p>
                             <p data-aos ="fade-up">At Hindusthan, we strive to ensure every student becomes <b>an employable, competent, and confident engineer.</b>
</p>
                              <p data-aos ="fade-up">Wishing you a fruitful and enriching journey ahead.
</p>
                            <p data-aos="fade-left"><b>Welcome to the Hindusthan family!</b>
</p>
                    <p data-aos="fade-right">Dr.C.Rameshkumar M.Tech (IIT-Delhi) MBA PhD
Principal
Hindusthan College of Engineering
Ingur
Prundurai
</p>
                    </div>
                </div>

            </section>
            <Footer/>
    </>
  )
}

export default Principles;