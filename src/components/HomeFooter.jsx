import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeFooter.css';

function HomeFooter() {
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
    } else if (path === '/#about') {
      // For About section on main page
      if (window.location.pathname === '/') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // For regular navigation (services, projects)
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><button onClick={() => handleNavigation('/')}>Home</button></li>
              <li><button onClick={() => handleNavigation('/#about')}>About</button></li>
              <li><button onClick={() => handleNavigation('/services')}>Services</button></li>
              <li><button onClick={() => handleNavigation('/projects')}>Projects</button></li>
              <li><button onClick={() => handleNavigation('/#faq')}>FAQ's</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Get in Touch</h3>
            <ul className="footer-list">
              <li><button onClick={() => handleNavigation('/contact')}>Submit an Enquiry</button></li>
              <li>Contact us:</li>
              <li><a href="tel:+917477098233">IND: +91 7477098233</a></li>
              <li><a href="mailto:evolvedgeagency1@gmail.com">mail: evolvedgeagency1@gmail.com</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              <li>Web Development</li>
              <li>3D design & Animations</li>
              <li>UI/UX Designs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright EvolvEdge
      </div>
    </footer>
  );
}

export default HomeFooter;