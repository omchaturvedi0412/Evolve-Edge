import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="#">Book a Call</a></li>
            <li><a href="#">Submit an Enquiry</a></li>
            <li>Contact us:</li>
            <li><a href="tel:+91xxxxxxxxxx">IND: 📱 +91 xxxxxxxxxx</a></li>
            <li><a href="mailto:xxx@gmail.com">mail: xxx@gmail.com</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">3D Design & Animations</a></li>
            <li><a href="#">UI/UX Designs</a></li>
          </ul>
        </div>
        <p className={styles.copy}>© Copyright Evolv Edge</p>
      </div>
    </footer>
  );
};

export default Footer;