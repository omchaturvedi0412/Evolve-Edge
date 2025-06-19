import React from 'react';
import styles from './DesignServices.module.css';

const DesignServices = () => {
  return (
    <section className={styles.designServices}>
      <h2 className={styles.title}>UI/UX & Graphic Design Services</h2>

      <div className={styles.servicesColumns}>
        <div className={styles.column}>
          <h3>UI/UX Design</h3>
          <ul>
            <li>User research & persona creation</li>
            <li>Information architecture</li>
            <li>Wireframing (low to high fidelity)</li>
            <li>Interactive prototyping (Figma)</li>
            <li>Mobile & web app interface design</li>
            <li>Responsive web design</li>
            <li>Design systems & component libraries</li>
            <li>Usability testing and feedback analysis</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Graphic Design</h3>
          <ul>
            <li>Logo design</li>
            <li>Brand identity creation (colors, fonts, guidelines)</li>
            <li>Social media posts & templates</li>
            <li>Posters, banners, and digital flyers</li>
            <li>Event branding (college or corporate)</li>
            <li>Pitch deck and presentation design</li>
            <li>Infographics & data visualization</li>
            <li>Motion graphics (basic animated visuals)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;