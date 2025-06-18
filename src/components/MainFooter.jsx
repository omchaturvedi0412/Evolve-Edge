import React from 'react';
import styles from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>FAQs</li>
          </ul>
          <p className={styles.copy}>© Copy write Evolv Edge</p>
        </div>
        <div className={styles.column}>
          <h4>Get in Touch</h4>
          <ul>
            <li>Book a Call</li>
            <li>Submit an Enquiry</li>
            <li>Contact us:</li>
            <li>IND : 📱 +91 xxxxxxxxxx</li>
            <li>mail: xxx@gmail.com</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>3D Design & Animations</li>
            <li>UI/UX Designs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
