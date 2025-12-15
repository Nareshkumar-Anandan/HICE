// src/App.js
import React, { useEffect, useState, Suspense, useLayoutEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Components/Loader.jsx";
import Preloader from "./Components/Preloader.jsx";

// 🔥 Lazy Loading All Pages
const Home = React.lazy(() => import("./Components/Home.jsx"));
const Contact = React.lazy(() => import("./Components/Contact.jsx"));
const TrustWebsite = React.lazy(() => import("./Components/TrustWebsite.jsx"));
const AboutHice = React.lazy(() => import("./Components/AboutInstitutionSection.jsx"));
const WhyHiceSection = React.lazy(() => import("./Components/WhyHiceSection.jsx"));
const ApplyNow = React.lazy(() => import("./Components/ApplyNow.jsx"));
const AcademicsMech = React.lazy(() => import("./Components/AIandDS.jsx"));
const OurInstitution = React.lazy(() => import("./Components/OurInstitution.jsx"));
const Why = React.lazy(() => import("./Components/WhyHindusthan.jsx"));
const Accreditations = React.lazy(() => import("./Components/Accrediations.jsx"));
const MainUGPG = React.lazy(() => import("./Components/MainUGPG.jsx"));
const Gallery = React.lazy(() => import("./Components/Gallery.jsx"));
const InformationTech = React.lazy(() => import("./Components/InformationTech.jsx"));
const Principles = React.lazy(() => import("./Components/Principles.jsx"));
const ClassRoom = React.lazy(() => import("./Components/ClassRoom.jsx"));
const Admission = React.lazy(() => import("./Components/AdmissionInformation.jsx"));
const AdmissionPolicy = React.lazy(() => import("./Components/AdmissionPolicy.jsx"));


// ⭐ GLOBAL ROUTE-LEVEL LOADER COMPONENT
// ⭐ GLOBAL ROUTE-LEVEL LOADER COMPONENT
// ⭐ GLOBAL ROUTE-LEVEL LOADER COMPONENT
function RouteLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const visitedRoutes = useRef(new Set()); // Track visited paths

  useLayoutEffect(() => {
    // If route is already visited, skip loader
    if (visitedRoutes.current.has(location.pathname)) {
      setLoading(false);
      return;
    }

    // New route -> Show loader
    setLoading(true);
    visitedRoutes.current.add(location.pathname);

    // 2. Minimum time promise (e.g., 2000ms)
    const minTimePromise = new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    // 3. Content load promise
    const contentLoadPromise = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    // 4. Wait for BOTH
    Promise.all([minTimePromise, contentLoadPromise]).then(() => {
      setLoading(false);
    });

  }, [location.pathname]);

  return <Preloader isLoading={loading} />;
}



function App() {

  // AOS Animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔥 Preload all components in background
  useEffect(() => {
    setTimeout(() => {
      import("./Components/Contact.jsx");
      import("./Components/TrustWebsite.jsx");
      import("./Components/AboutInstitutionSection.jsx");
      import("./Components/WhyHiceSection.jsx");
      import("./Components/ApplyNow.jsx");
      import("./Components/AIandDS.jsx");
      import("./Components/OurInstitution.jsx");
      import("./Components/WhyHindusthan.jsx");
      import("./Components/Accrediations.jsx");
      import("./Components/MainUGPG.jsx");
      import("./Components/Gallery.jsx");
      import("./Components/InformationTech.jsx");
      import("./Components/Principles.jsx");
      import("./Components/ClassRoom.jsx");
      import("./Components/AdmissionInformation.jsx");
      import("./Components/AdmissionPolicy.jsx");
    }, 1500);
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <RouteLoader />   {/* 🔥 GLOBAL LOADER */}

      <Header />
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutTrust" element={<TrustWebsite />} />
          <Route path="/aboutHICE" element={<AboutHice />} />
          <Route path="/applyNow" element={<ApplyNow />} />
          <Route path="/programs/artificial-intelligence-&-data-science" element={<AcademicsMech />} />
          <Route path="/about-us" element={<OurInstitution />} />
          <Route path="/whyHindusthan" element={<Why />} />
          <Route path="/accrediation" element={<Accreditations />} />
          <Route path="/ug-pg-programme" element={<MainUGPG />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programs/information-technology" element={<InformationTech />} />
          <Route path="/principal-desk" element={<Principles />} />
          <Route path="/classroom" element={<ClassRoom />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission-policy" element={<AdmissionPolicy />} />
         
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
