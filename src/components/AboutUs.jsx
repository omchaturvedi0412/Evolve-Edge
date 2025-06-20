import React from 'react';
import styles from './AboutUs.module.css';
import aboutImage from '../assets/images/aboutimg.png';

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.sectionContent}>
        <h1 className={styles.leftHeading}>ABOUT US</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <img
              src={aboutImage}
              alt="Team High Five"
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              EvolvEdge is an independent creative and digital solutions agency built by a team of passionate student professionals. <br /><br />
              We specialize in delivering client-focused services in UI/UX design, web development, branding, and 3D animation. Our goal is to turn your vision into scalable, polished, and impactful digital experiences.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;