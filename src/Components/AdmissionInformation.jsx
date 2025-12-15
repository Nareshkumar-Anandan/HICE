import React from 'react';
import "../Styles/AdmissionInformation.css";
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';

const AdmissionInformation = () => {
    return (
        <div className="admission-info-wrapper">
            {/* 1️⃣ Page Header (Hero Section) */}
           <section className="hero-section">
                   <div className="hero-background">
                     <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                   </div>
           
                   <div className="hero-content">
           
                     {/* Hero Text */}
                     <div className="hero-text">
                       <h1 className="hero-title">Contact us</h1>
                       <div className="breadcrumb"><a href="/">Home</a> &gt; <a href="/contact">Contact us</a></div>
                       <p className="hero-description">
                         If you are passionate and driven, explore our current openings across
                         Hindusthan Institutions and apply.
                       </p>
                     </div>
                   </div>
                 </section>

            <div className="admission-info-container">

                {/* 2️⃣ Programs Offered */}
                <section className="info-section">
                    <h2 className="section-title">Programs Offered</h2>
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="card-icon">💻</div>
                            <h3>Computer Science & Engineering</h3>
                            <p>Innovate the future with AI, ML, and Software Development.</p>
                        </div>
                        <div className="program-card">
                            <div className="card-icon">📡</div>
                            <h3>Electronics & Communication</h3>
                            <p>Connect the world through advanced communication systems.</p>
                        </div>
                        <div className="program-card">
                            <div className="card-icon">⚙️</div>
                            <h3>Mechanical Engineering</h3>
                            <p>Design and build powerful machines and systems.</p>
                        </div>
                        <div className="program-card">
                            <div className="card-icon">🏗️</div>
                            <h3>Civil Engineering</h3>
                            <p>Construct sustainable infrastructure for tomorrow.</p>
                        </div>
                        <div className="program-card">
                            <div className="card-icon">🔬</div>
                            <h3>Information Technology</h3>
                            <p>Master the digital landscape and cloud computing.</p>
                        </div>
                        <div className="program-card">
                            <div className="card-icon">⚡</div>
                            <h3>Electrical & Electronics</h3>
                            <p>Power the globe with sustainable energy solutions.</p>
                        </div>
                    </div>
                </section>

                {/* 3️⃣ Eligibility Criteria */}
                <section className="info-section alt-bg">
                    <h2 className="section-title">Eligibility Criteria</h2>
                    <div className="eligibility-container">
                        <div className="eligibility-box">
                            <h3>For B.E / B.Tech</h3>
                            <ul className="eligibility-list">
                                <li><strong>Minimum Marks:</strong> 50% aggregate in Physics, Chemistry, and Mathematics (45% for reserved categories).</li>
                                <li><strong>Compulsory Subjects:</strong> Physics and Mathematics are mandatory.</li>
                                <li><strong>Entrance Exam:</strong> TNEA Counselling or Valid JEE Main Score.</li>
                                <li><strong>Age Limit:</strong> As per Government of Tamil Nadu norms.</li>
                            </ul>
                        </div>
                        <div className="eligibility-box">
                            <h3>For Lateral Entry (Direct 2nd Year)</h3>
                            <ul className="eligibility-list">
                                <li><strong>Diploma Eligibility:</strong> Passed Diploma in Engineering/Technology from a recognized institution.</li>
                                <li><strong>Aggregate Percentage:</strong> Minimum 55% in the final year of Diploma.</li>
                                <li><strong>B.Sc Graduates:</strong> B.Sc with Mathematics as a subject are also eligible.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4️⃣ Admission Procedure */}
                <section className="info-section">
                    <h2 className="section-title">Admission Procedure</h2>
                    <div className="timeline-container">
                        <div className="timeline-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h4>Online Registration</h4>
                                <p>Register on our admission portal and fill out the application form.</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h4>Document Upload</h4>
                                <p>Upload scanned copies of all necessary academic and personal documents.</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h4>Counselling / Screening</h4>
                                <p>Attend the counseling session or screening interview based on merit.</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h4>Seat Allotment</h4>
                                <p>Receive your provisional seat allotment letter upon selection.</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">5</div>
                            <div className="step-content">
                                <h4>Fee Payment</h4>
                                <p>Confirm your admission by paying the tuition and other fees.</p>
                            </div>
                        </div>
                        <div className="timeline-step">
                            <div className="step-number">6</div>
                            <div className="step-content">
                                <h4>Final Enrollment</h4>
                                <p>Submit original documents and complete the enrollment process.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5️⃣ Important Dates */}
                <section className="info-section alt-bg">
                    <h2 className="section-title">Important Dates</h2>
                    <div className="table-responsive">
                        <table className="info-table dates-table">
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Date (Tentative)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Application Opening Date</td>
                                    <td>15th April 2025</td>
                                </tr>
                                <tr>
                                    <td>Application Closing Date</td>
                                    <td>30th June 2025</td>
                                </tr>
                                <tr>
                                    <td>Counselling Starts</td>
                                    <td>10th July 2025</td>
                                </tr>
                                <tr>
                                    <td>Classes Commence</td>
                                    <td>1st August 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 6️⃣ Fee Structure */}
                <section className="info-section">
                    <h2 className="section-title">Fee Structure (Per Year)</h2>
                    <div className="table-responsive">
                        <table className="info-table fee-table">
                            <thead>
                                <tr>
                                    <th>Particulars</th>
                                    <th>Amount (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tuition Fee</td>
                                    <td>₹ 55,000</td>
                                </tr>
                                <tr>
                                    <td>Hostel Fee (Optional)</td>
                                    <td>₹ 85,000</td>
                                </tr>
                                <tr>
                                    <td>Transport Fee (Optional)</td>
                                    <td>₹ 25,000 - ₹ 40,000 (Based on distance)</td>
                                </tr>
                                <tr>
                                    <td>Miscellaneous Charges</td>
                                    <td>₹ 10,000</td>
                                </tr>
                                <tr className="total-row">
                                    <td><strong>Total (Day Scholar)</strong></td>
                                    <td><strong>₹ 65,000 + Transport</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 7️⃣ Seat Matrix */}
                <section className="info-section alt-bg">
                    <h2 className="section-title">Seat Matrix</h2>
                    <div className="table-responsive">
                        <table className="info-table seat-table">
                            <thead>
                                <tr>
                                    <th>Department</th>
                                    <th>Total Intake</th>
                                    <th>Lateral Entry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Computer Science & Engineering</td>
                                    <td>180</td>
                                    <td>18</td>
                                </tr>
                                <tr>
                                    <td>Information Technology</td>
                                    <td>120</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Electronics & Communication</td>
                                    <td>120</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Mechanical Engineering</td>
                                    <td>60</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Civil Engineering</td>
                                    <td>60</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 8️⃣ Documents Required */}
                <section className="info-section">
                    <h2 className="section-title">Documents Required</h2>
                    <div className="documents-checklist">
                        <div className="checklist-item">📄 10th Marksheet (Original + 3 Copies)</div>
                        <div className="checklist-item">📄 12th Marksheet (Original + 3 Copies)</div>
                        <div className="checklist-item">📄 Transfer Certificate (TC)</div>
                        <div className="checklist-item">📄 Community Certificate</div>
                        <div className="checklist-item">📄 Migration Certificate (Other State students)</div>
                        <div className="checklist-item">📄 Entrance Exam Allotment Order</div>
                        <div className="checklist-item">🆔 Aadhaar Card Copy</div>
                        <div className="checklist-item">📸 5 Passport Size Photos</div>
                        <div className="checklist-item">🏥 Medical Fitness Certificate</div>
                    </div>
                </section>

                {/* 9️⃣ Contact Information */}
                <section className="info-section contact-info-section">
                    <h2 className="section-title">Contact Admissions</h2>
                    <div className="contact-grid">
                        <div className="contact-card">
                            <h4>Head of Admissions</h4>
                            <p>Dr. R. Senthamil Selvan</p>
                            <p>📞 +91 98765 43210</p>
                            <p>✉️ admissions@hindusthan.net</p>
                        </div>
                        <div className="contact-card">
                            <h4>Admissions Office</h4>
                            <p>Hindusthan College of Engineering</p>
                            <p>Valley Campus, Pollachi Highway,</p>
                            <p>Coimbatore - 641 032</p>
                        </div>
                        <div className="contact-card">
                            <h4>Working Hours</h4>
                            <p>Monday - Saturday</p>
                            <p>9:00 AM - 5:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default AdmissionInformation;
