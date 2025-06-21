import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutUs.module.css';
import aboutImage from '../assets/images/aboutimg.png';

const AboutUs = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "ABOUT US....";
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Typing animation for title
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypedText("");
          let current = 0;
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            setTypedText((prev) => {
              if (current < fullText.length) {
                current++;
                return fullText.slice(0, current);
              } else {
                clearInterval(intervalRef.current);
                return prev;
              }
            });
          }, 60);
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observerRef.current.observe(titleRef.current);
    }

    // Holographic animation observer
    const containerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.holographicActive);
        } else {
          entry.target.classList.remove(styles.holographicActive);
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current && titleRef.current) {
        observerRef.current.unobserve(titleRef.current);
      }
      clearInterval(intervalRef.current);
      if (containerRef.current) {
        containerObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.sectionContent}>
        <h1 className={styles.leftHeading} ref={titleRef}>
          {typedText}
        </h1>
        <div className={styles.aboutContainer} ref={containerRef}>
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImage}>
              <img
                src={aboutImage}
                alt="Team High Five"
              />
            </div>
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