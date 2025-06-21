import React, { useEffect, useState, useRef } from 'react';
import styles from './WhyUs.module.css';
import bgImage from '../assets/images/whyusimg.png'; 

const WhyUs = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const headingRef = useRef(null);
  const headingText = "WHO ARE WE?";

  // Typing effect with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animation when element comes into view
            setDisplayText("");
            setCurrentIndex(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Typing effect animation
  useEffect(() => {
    if (currentIndex < headingText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(prev => prev + headingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed (100ms per character)

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, headingText]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Blink speed (500ms)

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      className={styles.whyUs}
      style={{backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.content}>
        <h1 ref={headingRef} className={styles.leftHeading}>
          {displayText}
          <span 
            className={styles.typingCursor} 
            style={{ opacity: showCursor ? 1 : 0 }}
          >
            |
          </span>
        </h1>
        <p>
          Evolvedge is a next-generation digital agency led by a team of passionate creators,
          designers, developers, and storytellers. We specialize in transforming ideas into
          powerful digital experiences – from intuitive interfaces to immersive 3D visuals.
        </p>
        <br />
        <p>
          We're not just service providers – we're collaborators.
        </p>
        <br />
        <p>
          Our team brings together creativity, strategy, and technical expertise to deliver
          solutions that are functional, aesthetic, and future-ready.
          We value originality, consistency, and clear communication, making us the right choice
          for clients who want work that speaks for itself.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;