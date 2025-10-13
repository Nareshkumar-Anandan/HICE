// src/App.js
import {React,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import TrustWebsite from "./Components/TrustWebsite.jsx";
import AboutHice from "./Components/AboutInstitutionSection.jsx";
import WhyHiceSection from "./Components/WhyHiceSection.jsx";
import ApplyNow from "./Components/ApplyNow.jsx";
import AcademicsMech from "./Components/AIandDS.jsx";
import OurInstitution from "./Components/OurInstitution.jsx";
import Why from "./Components/WhyHindusthan.jsx";
import Accreditations from "./Components/Accrediations.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import MainUGPG from "./Components/MainUGPG.jsx";
import Gallery from "./Components/Gallery.jsx";
import InformationTech from "./Components/InformationTech.jsx";
import Principles from "./Components/Principles.jsx";
function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
         <Route path="/aboutTrust" element={<TrustWebsite/>}/>
         <Route path="/aboutHICE" element={<AboutHice/>}/>
         <Route path="/applyNow" element={<ApplyNow/>}/>
         <Route path="/programs/artificial-intelligence-&-data-science" element={<AcademicsMech/>}/>
         <Route path="/about-us" element={<OurInstitution/>}/>
         <Route path="/whyHindusthan" element={<Why/>}/>
         <Route path="/accrediation" element={<Accreditations/>}/>
         <Route path="/ug-pg-programme" element={<MainUGPG/>}/>
         <Route path="/gallery" element={<Gallery/>}/>
         <Route path="/programs/information-technology"  element={<InformationTech/>}/>
         <Route path="/principal-desk" element={<Principles/>}/>
      </Routes>
    </Router>
  );
}

export default App;
