import React, { useEffect, useState } from 'react';
import styles from './WhyUs.module.css';
import bgImage from '../assets/images/whyusimg.png'; 

const WhyUs = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const headingText = "WHO ARE WE?";

  useEffect(() => {
    // Typing effect for heading
    if (currentIndex < headingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + headingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust typing speed here (milliseconds per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, headingText]);

  return (
    <section
      className={styles.whyUs}
      style={{backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.leftHeading}>
  {displayText}
  {currentIndex < headingText.length && <span className={styles.typingCursor}>|</span>}
</h1>
        <p>
          Evolvedge is a next-generation digital agency led by a team of passionate creators,
          designers, developers, and storytellers. We specialize in transforming ideas into
          powerful digital experiences – from intuitive interfaces to immersive 3D visuals.
        </p>
        <br></br>
        <p>
          We're not just service providers – we're collaborators.
        </p>
        <br></br>
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