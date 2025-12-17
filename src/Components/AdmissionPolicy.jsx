import React, { useState } from 'react';
import '../Styles/AdmissionPolicy.css';
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';

const AdmissionPolicy = () => {
    const [activeSection, setActiveSection] = useState('objective');

    // No useEffect for scroll listener needed anymore

    const handleSectionChange = (e, id) => {
        e.preventDefault();
        setActiveSection(id);
        // Optional: Scroll to top of content area on switch if the content is long
        window.scrollTo({ top: 350, behavior: 'smooth' });
    };

    return (
        <div className="admission-policy-wrapper">
            {/* Hero Section - Full Width */}
            <section className="hero-section">
                <div className="hero-background">
                    <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                </div>

                <div className="hero-content">
                    {/* Hero Text */}
                    <div className="hero-text">
                        <h1 className="hero-title">Admission Policy</h1>
                        <div className="breadcrumb">
                            <a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a> &gt; {' '}
                            <a href="/admissions" style={{ textDecoration: "none", color: "white" }}>Admissions</a> &gt; {' '}
                            <a href="/admission-policy" style={{ textDecoration: "none", color: "#f4b400" }}>
                                Admission Policy
                            </a>
                        </div>
                        <p className="hero-description">
                            Explore our transparent and merit-based admission process designed to select the best talent.
                        </p>
                    </div>
                </div>
            </section>

            {/* Split Layout: Sidebar + Content */}
            <div className="admission-policy-container">
                {/* Left Sidebar - Sticky */}
                <nav className="policy-sidebar">
                    <h3 className="sidebar-title">Admission Policy</h3>
                    <ul className="policy-menu">
                        <li>
                            <a
                                href="#objective"
                                className={activeSection === 'objective' ? 'active' : ''}
                                onClick={(e) => handleSectionChange(e, 'objective')}
                            >
                                <span className="icon">🎯</span> Objective
                            </a>
                        </li>
                        <li>
                            <a
                                href="#eligibility"
                                className={activeSection === 'eligibility' ? 'active' : ''}
                                onClick={(e) => handleSectionChange(e, 'eligibility')}
                            >
                                <span className="icon">✅</span> Eligibility Criteria
                            </a>
                        </li>
                        <li>
                            <a
                                href="#procedure"
                                className={activeSection === 'procedure' ? 'active' : ''}
                                onClick={(e) => handleSectionChange(e, 'procedure')}
                            >
                                <span className="icon">📝</span> Admission Procedure
                            </a>
                        </li>
                        <li>
                            <a
                                href="#reservation"
                                className={activeSection === 'reservation' ? 'active' : ''}
                                onClick={(e) => handleSectionChange(e, 'reservation')}
                            >
                                <span className="icon">⚖️</span> Reservation Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#documents"
                                className={activeSection === 'documents' ? 'active' : ''}
                                onClick={(e) => handleSectionChange(e, 'documents')}
                            >
                                <span className="icon">📂</span> Documents Required
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Right Content Area - Conditional Rendering */}
                <main className="policy-content-area">
                    {activeSection === 'objective' && (
                        <section className="policy-section image-left fade-in">
                            <div className="section-image">
                                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="Education Objective" />
                            </div>
                            <div className="section-content">
                                <h2>Objective</h2>
                                <p>
                                    Our primary objective is to provide a transparent, merit-based, and inclusive admission process
                                    that selects students with the potential to excel in their chosen fields. We aim to foster
                                    an environment of academic excellence, critical thinking, and holistic development.
                                    The institution is committed to nurturing talent and providing equal opportunities to
                                    all aspiring candidates, ensuring a diverse and vibrant student community.
                                </p>
                            </div>
                        </section>
                    )}

                    {activeSection === 'eligibility' && (
                        <section className="policy-section image-right fade-in">
                            <div className="section-content">
                                <h2>Eligibility Criteria</h2>
                                <p>
                                    Candidates must meet specific academic requirements to be considered for admission.
                                    For undergraduate programs, a minimum aggregate score in the qualifying examination (10+2 or equivalent)
                                    is required. Specific subject prerequisites may apply depending on the course.
                                    International students must provide equivalence certificates and meet English proficiency standards.
                                    Age limits and relaxation for reserved categories are applicable as per government norms.
                                </p>
                            </div>
                            <div className="section-image">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80" alt="Students Eligibility" />
                            </div>
                        </section>
                    )}

                    {activeSection === 'procedure' && (
                        <section className="policy-section image-left fade-in">
                            <div className="section-image">
                                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" alt="Admission Procedure" />
                            </div>
                            <div className="section-content">
                                <h2>Admission Procedure</h2>
                                <p>
                                    The admission process begins with the submission of an online application form via our official portal.
                                    Candidates are shortlisted based on merit or entrance examination scores. Shortlisted applicants
                                    will be called for counseling or a personal interview. Upon selection, a provisional admission letter
                                    will be issued. Confirmation of admission is subject to the verification of original documents
                                    and payment of the requisite fees within the stipulated timeline.
                                </p>
                            </div>
                        </section>
                    )}

                    {activeSection === 'reservation' && (
                        <section className="policy-section image-right fade-in">
                            <div className="section-content">
                                <h2>Reservation Policy</h2>
                                <p>
                                    We strictly adhere to the state and central government's reservation policies to ensure social justice
                                    and equal access to education. Seats are reserved for Scheduled Castes (SC), Scheduled Tribes (ST),
                                    Other Backward Classes (OBC), and Economically Weaker Sections (EWS) as per statutory guidelines.
                                    Additionally, a quota is available for differently-abled candidates, sports achievers, and
                                    wards of defense personnel, subject to the production of valid certificates.
                                </p>
                            </div>
                            <div className="section-image">
                                <img src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&q=80" alt="Reservation Policy" />
                            </div>
                        </section>
                    )}

                    {activeSection === 'documents' && (
                        <section className="policy-section image-left fade-in">
                            <div className="section-image">
                                <img src="https://images.unsplash.com/photo-1621640786029-22ad71e36347?w=800&q=80" alt="Documents Required" />
                            </div>
                            <div className="section-content">
                                <h2>Documents Required</h2>
                                <p>
                                    At the time of admission, candidates must submit the following documents in original along with
                                    photocopies:
                                    <br /><br />
                                    1. 10th and 12th Mark Sheets and Passing Certificates.<br />
                                    2. Transfer Certificate (TC) and Migration Certificate.<br />
                                    3. Caste/Category Certificate (if applicable).<br />
                                    4. Domicile or Residence Proof.<br />
                                    5. Passport-sized photographs.<br />
                                    6. ID Proof (Aadhar Card/Passport).
                                </p>
                            </div>
                        </section>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default AdmissionPolicy;
