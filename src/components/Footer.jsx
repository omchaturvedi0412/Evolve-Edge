import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === '/#faq') {
      // For FAQ on main page
      if (window.location.pathname === '/') {
        const faqSection = document.getElementById('faq');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const faqSection = document.getElementById('faq');
          if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/')}>Home</button></li>
            
            <li><button className={styles.navButton} onClick={() => handleNavigation('/services')}>Services</button></li>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/projects')}>Projects</button></li>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/#faq')}>FAQs</button></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Get in Touch</h4>
          <ul>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/contact')}>Submit an Enquiry</button></li>
            <li>Contact us:</li>
            <li><a href="tel:+917477098233" className={styles.contactLink}>IND: +91 7477098233</a></li>
            <li><a href="mailto:evolvedgeagency1@gmail.com" className={styles.contactLink}>mail: evolvedgeagency1@gmail.com</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/services#web-development')}>Web Development</button></li>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/services#3d-design')}>3D Design & Animations</button></li>
            <li><button className={styles.navButton} onClick={() => handleNavigation('/services#ui-ux')}>UI/UX Designs</button></li>
          </ul>
        </div>
        <p className={styles.copy}>© Copyright Evolv Edge</p>
      </div>
    </footer>
  );
};

export default Footer;