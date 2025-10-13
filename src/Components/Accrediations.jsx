import React from 'react';
import '../Styles/Accrediations.css';
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';
const Accreditations = () => {
    // Placeholder image URLs - you will replace these with your actual image paths
    const images = {
        naacAplusplus: '../Accrediations/NAAC_A++.png',
        iso9001: '../Accrediations/ISO_9001-2015.svg 1.png',
        aicte: '/Accrediations/AICTE.png',
        nba: '../Accrediations/NBA.png',
        ugc2f12b: '../Accrediations/UGC_India_Logo 1.png',
        naacA: '../Accrediations/NAAC-Logo-250x250-1 1.png',
        coa: '../Accrediations/CA.png',
        annaUniversity: '../Accrediations/Anna.png',
        cambridge: '../Accrediations/Cambridge.png',
        tnbhse: '../Accrediations/TNBHSE.png',
        bharathiar: '../Accrediations/Bharathiar.png',
        nirf: '../Accrediations/Nirf.png',
        iic: '../Accrediations/iic.png',
        bhumi: '../Accrediations/Bhumi 1.png',
        msme: '../Accrediations/msme.png',
        isro: '../Accrediations/isr.png',
    };

    const accreditationData = [
        {
            image: images.naacAplusplus,
            alt: "NAAC A++ Accreditation",
            text: (
                <>
                    <p>NAAC A++, CGPA 3.66</p>
                    <p>(Second Cycle, 2023).</p>
                </>
            ),
        },
        {
            image: images.iso9001,
            alt: "ISO 9001:2015 Certification",
            text: (
                <>
                    <p>ISO 9001:2015 Quality Management</p>
                    <p>Certification (TÜV Rheinland)</p>
                </>
            ),
        },
        {
            image: images.aicte,
            alt: "AICTE Approval",
            text: (
                <>
                    <p>AICTE Approval For Engineering/</p>
                    <p>Technology Programs.</p>
                </>
            ),
        },
        {
            image: images.nba,
            alt: "NBA Accreditation",
            text: (
                <>
                    <p>• NBA Accreditation For Select UG</p>
                    <p>Engineering Programs (E.g., MECH,</p>
                    <p>ECE, CSE, IT, EEE).</p>
                </>
            ),
        },
        {
            image: images.ugc2f12b,
            alt: "UGC 2(F) & 12(B) Recognition",
            text: (
                <>
                    <p>UGC 2(F) & 12(B) Recognition.</p>
                </>
            ),
        },
        {
            image: images.naacA,
            alt: "NAAC 'A' Grade",
            text: (
                <>
                    <p>NAAC 'A' Grade (Valid Up To</p>
                    <p>31-12-2025).</p>
                </>
            ),
        },
        {
            image: images.coa,
            alt: "Council Of Architecture (CoA) Approval",
            text: (
                <>
                    <p>Council Of Architecture (CoA)</p>
                    <p>Approval For B.Arch (Academic</p>
                    <p>Session 2024-25, TN78/TN79 Listing).</p>
                </>
            ),
        },
        {
            image: images.annaUniversity,
            alt: "Anna University Affiliation (Architecture)",
            text: (
                <>
                    <p>Anna University Affiliation</p>
                    <p>(Architecture).</p>
                </>
            ),
        },
        {
            image: images.cambridge,
            alt: "Cambridge International",
            text: (
                <>
                    <p>Cambridge International (CAIE)</p>
                    <p>Curriculum Affiliation (International</p>
                    <p>School, Coimbatore).</p>
                </>
            ),
        },
        {
            image: images.tnbhse,
            alt: "Tamil Nadu State Board (TNBHSE) Affiliation",
            text: (
                <>
                    <p>Tamil Nadu State Board (TNBHSE)</p>
                    <p>Affiliation (Matriculation Higher</p>
                    <p>Secondary).</p>
                </>
            ),
        },
        {
            image: images.bharathiar,
            alt: "Bharathiar University Affiliation",
            text: (
                <>
                    <p>Bharathiar University Affiliation (Arts &</p>
                    <p>Science; Science & Commerce).</p>
                </>
            ),
        },
    ];

    const awardsData = [
        { image: images.nirf, alt: "NIRF Award" },
        { image: images.iic, alt: "Institution's Innovation Council Award" },
        { image: images.bhumi, alt: "BHUMI Award" },
        { image: images.msme, alt: "MSME Award" },
        { image: images.isro, alt: "ISRO Award" },
    ];

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
                        <h1 className="hero-title">Our Institutions</h1>
                        <div className="breadcrumb">
                          <a href="/" style={{ textDecoration: "none", color: "white" }}>
                            Home
                          </a>{" "}
                           &gt;{" "}
                          <a href="/about-us" style={{ textDecoration: "none", color: "white" }}>
                           About us
                          </a>{" "}
                          &gt;{" "}
                          <a href="#" style={{ textDecoration: "none", color: "#f4b400" }}>
                            Accrediation and Recognitions
                          </a>
                        </div>
                        <p className="hero-description">
                          If you are passionate and driven, explore our current openings
                          across Hindusthan Institutions and apply.
                        </p>
                      </div>
                    </div>
                  </section>
        <div className="accreditations-section">
            
            <div className="accreditations-header">
                <span className="header-line"></span>
                <h1>ACCREDITATIONS AND RECOGNITIONS</h1>
            </div>
            <div className="accreditations-grid">
                {accreditationData.map((data, index) => (
                    <div className="accreditation-card" key={index}>
                        <div className="card-image-container">
                            <img src={data.image} alt={data.alt} />
                        </div>
                        <div className="card-text-container">
                            {data.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Awards and Recognitions Section */}
            <div className="awards-section">
                <div className="awards-container">
                    <div className="awards-text-box">
                        {/* Adding the new line element here */}
                        <span className="awards-header-line"></span>
                        <div className="awards-text">
                            <p>AWARDS AND</p>
                            <p>RECOGNITIONS</p>
                        </div>
                    </div>
                    <div className="awards-logo-grid">
                        {awardsData.map((award, index) => (
                            <div className="award-logo-container" key={index}>
                                <img src={award.image} alt={award.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
            </>
    );
};

export default Accreditations;