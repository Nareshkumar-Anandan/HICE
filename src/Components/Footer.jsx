import React from "react";
import "../Styles/Footer.css";
import logo from "../Assets/HICElogo.png"; // your logo path
import linkedinIcon from "../Assets/mdi_linkedin.png"; // your linkedin icon path
import facebookIcon from "../Assets/fe_facebook.png"; // your facebook icon path
import youtubeIcon from "../Assets/Vector.png"; // your youtube icon path
import twitterIcon from "../Assets/prime_twitter.png"; // your twitter icon path
import phoneIcon from "../Assets/lucide_phone.png"; // your phone icon path
//import emailIcon from "../Assets/ant-design_mail-outlined.png"; // your email icon path
import addressIcon from "../Assets/mdi_address-marker-outline.png"; // your address icon path
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section: Logo + Contact */}
        <div className="footer-col">
          <div className="footer-contact">
          <img src={logo} alt="Hindusthan Logo" className="footer-logo" />
          <p className="footer-address">
            <img src={addressIcon} alt=" address Icon" />&nbsp;&nbsp;&nbsp;
             Perundurai - Chennimalai Road,Ingur, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perundurai,  
          Tamil Nadu 638052.
          </p>
          <p><img src={phoneIcon} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;+91 98431 33333 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 80983 33333</p>
          <p>@ &nbsp;&nbsp;&nbsp;&nbsp;info@hindusthan.net</p>
          </div><br/>
          <h3>Reach Us</h3>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src = {linkedinIcon} alt="SocialImg"/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src = {facebookIcon} alt="SocialImg"/></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src = {youtubeIcon} alt="SocialImg"/></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src = {twitterIcon} alt="SocialImg"/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="two-column-links">
          <ul>
            <li><a href="/applyNow">Apply Now</a></li>
            <li><a href="/maps">Maps & Direction</a></li>
            <li><a href="/anti-ragging">Anti Ragging</a></li>
            <li><a href="/outreach">Outreach</a></li>
            </ul>
            <ul>
            <li><a href="/news">News</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul></div>
        </div>

        {/* Our Institutions */}
        <div className="footer-col">
          <h3>Our Institutions</h3>
          <div className="two-column-links">
          <ul>
            <li><a href="https://www.hicas.ac.in" target="_blank" rel="noopener noreferrer">Arts and Science</a></li>
            <li><a href="https://www.hicet.ac.in" target="_blank" rel="noopener noreferrer">Engineering</a></li>
            <li><a href="http//www.hit.edu.in/" target="_blank" rel="noopener noreferrer">Institute of Technology</a></li>
            <li> <a href="https://www.hindusthan.net" target="_blank" rel="noopener noreferrer">College of Education</a></li>
            <li><a href="https://www.hsoa.ac.in" target="_blank" rel="noopener noreferrer">Architecture</a></li>
            <li><a href="https://hpc.ac.in/" target="_blank" rel="noopener noreferrer">Polytechnic</a></li>
            <li><a href="https://hindusthan.net/hschool/" target="_blank" rel="noopener noreferrer">Hr Sec. School</a></li>
            </ul>
            <ul>
            <li><a href="https://his.ac.in/" target="_blank" rel="noopener noreferrer">International School</a></li>
            <li><a href="https://hindusthan.net/hichs/"  target="_blank" rel="noopener noreferrer">Health Science</a></li>
            <li><a href="https://hisac.ac.in/"  target="_blank" rel="noopener noreferrer">College of Science</a></li>
            <li><a href="https://www.hindusthan.net/hicon/"  target="_blank" rel="noopener noreferrer">Nursing</a></li>
          </ul></div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
