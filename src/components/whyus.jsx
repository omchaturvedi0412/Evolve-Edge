  import React from 'react';
  import styles from './WhyUs.module.css';
  import bgImage from '../assets/images/whyusimg.png'; 

  const WhyUs = () => {
    return (
      <section
        className={styles.whyUs}
        style={{backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.content}>
          <h1 className={styles.leftHeading}>WHO ARE WE?</h1>
          <p>
            Evolvedge is a next-generation digital agency led by a team of passionate creators,
            designers, developers, and storytellers. We specialize in transforming ideas into
            powerful digital experiences – from intuitive interfaces to immersive 3D visuals.
          </p>
          <br></br>
          <p>
            We’re not just service providers – we’re collaborators.
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
