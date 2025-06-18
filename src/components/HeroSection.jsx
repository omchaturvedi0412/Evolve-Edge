import React from "react";
import "./HeroSection.css";
import robotImage from "../assets/images/Robot.png";
import vrGuyImage from "../assets/images/vrguy.png";
import visionImage from "../assets/images/vision.png";
import missionImage from "../assets/images/mission.png";
import VectorBlue from "../assets/images/VectorBlue.png";
import Vector from "../assets/images/Vector.png";
import VectorDown from "../assets/images/Vector-down.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import TypeWriter from './TypeWriter';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate("/contact");
  };

  return (
    <div className="hero-wrapper">
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <div className="hero-quote">
            <img className="vector-image" src={Vector} alt="Vector Background" />
            <div className="robot-container">
              <img className="robot-image" src={robotImage} alt="Robot" />
            </div>
            <img className="vector-down-image" src={VectorDown} alt="VectorDown" />
            <p className="hero-text">"A space where innovation meets implementation."</p>
          </div>
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision-box">
          <div className="vision-box-left">
            <p className="vision-heading">Looking for Radial Ui/Ux Design Web Development or other Tech Services?</p>
            
            <div className="vision-image-stack">
              <img className="VectorBlue" src={VectorBlue} alt="Vector Blue" />
              <img className="vrGuy" src={vrGuyImage} alt="VR Guy" />
            </div>

            <button className="enquire-button" onClick={handleEnquireClick}>
              Enquire Now
            </button>
          </div>
        </div>

        <div className="content-box">
          <div className="vision">
            <TypeWriter text="VISION..." />
            <div className="vision-content">
              <img src={visionImage} alt="Vision" className="vision-img" />
              <p>
                To become a trusted creative-technology partner for businesses and individuals by
                delivering innovative, student-led solutions that inspire, empower, and elevate digital experiences.
              </p>
            </div>
          </div>
          <div className="mission">
            <TypeWriter text="MISSION..." />
            <div className="mission-content with-bg">
              <img src={missionImage} alt="Mission" className="mission-bg" />
              <ul>
                <li>To provide professional-grade digital services through a collaborative, client-first approach</li>
                <li>To nurture creative minds by working on real-world projects</li>
                <li>To build strong, long-term relationships with clients based on trust, transparency, and results</li>
                <li>To deliver affordable, high-impact digital solutions that reflect the spirit of innovation</li>
              </ul>
            </div>
        </div>
          </div>
        
      </section>
    </div>
  );
};

export default HeroSection;