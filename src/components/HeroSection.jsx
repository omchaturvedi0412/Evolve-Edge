import React, { useRef, useEffect, useState } from "react";
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

const HeroSection = () => {
  const navigate = useNavigate();
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const visionImgRef = useRef(null);
  const [visionText, setVisionText] = useState("");
  const [missionText, setMissionText] = useState("");
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleEnquireClick = () => {
    navigate("/contact");
  };

  // Typing effect for vision and mission
  useEffect(() => {
    const visionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const text = entry.target.dataset.text;
            let current = 0;
            
            const interval = setInterval(() => {
              if (current < text.length) {
                setVisionText(text.slice(0, current + 1));
                current++;
              } else {
                clearInterval(interval);
              }
            }, 60);
          }
        });
      },
      { threshold: 0.5 }
    );

    const missionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const text = entry.target.dataset.text;
            let current = 0;
            
            const interval = setInterval(() => {
              if (current < text.length) {
                setMissionText(text.slice(0, current + 1));
                current++;
              } else {
                clearInterval(interval);
              }
            }, 60);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (missionRef.current) missionObserver.observe(missionRef.current);

    return () => {
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
      if (missionRef.current) missionObserver.unobserve(missionRef.current);
    };
  }, []);

  // Image animation effect - triggers every time image comes into view
  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          } else {
            setIsImageVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (visionImgRef.current) {
      imageObserver.observe(visionImgRef.current);
    }

    return () => {
      if (visionImgRef.current) {
        imageObserver.unobserve(visionImgRef.current);
      }
    };
  }, []);

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
            <h2 ref={visionRef} data-text="VISION..." className="typewriter">
              {visionText}
              <span className="cursor">|</span>
            </h2>
            <div className="vision-content">
              <img 
                ref={visionImgRef}
                src={visionImage} 
                alt="Vision" 
                className={`vision-img ${isImageVisible ? 'visible' : ''}`}
              />
              <p>
                To become a trusted creative-technology partner for businesses and individuals by
                delivering innovative, student-led solutions that inspire, empower, and elevate digital experiences.
              </p>
            </div>
          </div>
          <div className="mission">
            <h2 ref={missionRef} data-text="MISSION..." className="typewriter">
              {missionText}
              <span className="cursor">|</span>
            </h2>
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