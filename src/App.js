import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/whyus";
import WhyChooseUs from "./components/WhyChooseUs";
import HomeServices from "./components/HomeServices";
import Faq from "./components/Faq";
import AfterFaq from "./components/AfterFaq";
import HomeFooter from "./components/HomeFooter";
import Services from "./components/Services";
import Projects from "./components/Projects"; // Import Projects component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutUs />
            <WhyUs />
            <WhyChooseUs />
            <HomeServices />
            <Faq />
            <AfterFaq />
            <HomeFooter />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;