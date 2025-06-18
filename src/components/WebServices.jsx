import React from 'react';
import styles from './WebServices.module.css';

const WebServices = () => {
  return (
    <section className={styles.webServices}>
      <h2 className={styles.title}>Web Development Services</h2>

      <div className={styles.servicesColumns}>
        <div className={styles.column}>
          <h3>Frontend Development</h3>
          <ul>
            <li>Custom website UI using HTML, CSS, JavaScript</li>
            <li>Responsive design for all screen sizes</li>
            <li>Modern frameworks (MERN)</li>
            <li>Animations and transitions for enhanced UX</li>
            <li>Pixel-perfect implementation from Figma designs</li>
          </ul>
        </div>

        <div className={`${styles.column} ${styles.column2}`}>
          <h3>Backend Development</h3>
          <ul>
            <li>API development and integration</li>
            <li>Database setup (MongoDB, Firebase, Cloud database & serverless)</li>
            <li>User authentication systems</li>
            <li>Admin dashboards and content management</li>
            <li>Scalable and secure architecture</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Complete Website Solutions</h3>
          <ul>
            <li>Static websites (Portfolios, Landing Pages)</li>
            <li>Dynamic websites (Blogs, Event Platforms)</li>
            <li>Single Page Applications (SPA)</li>
            <li>E-commerce websites with payment integration</li>
            <li>Domain + Hosting setup & deployment</li>
          </ul>
        </div>
      </div>

      <div className={styles.additionalServices}>
        <h3>Additional Services</h3>
        <div className={styles.extraColumns}>
          <ul>
            <li>Performance enhancement</li>
            <li>Web accessibility improvements (WCAG)</li>
          </ul>
          <ul>
            <li>Maintenance & updates</li>
            <li>Custom forms, chatbots, and integrations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WebServices;
