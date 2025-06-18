import React from "react";
import './HomeFooter.css';

function HomeFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">FAQ's</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Get in Touch</h3>
            <ul className="footer-list">
              <li><a href="#">Submit an Enquiry</a></li>
              <li><a href="#">Contact us:</a></li>
              <li><a href="tel:+917477098233">IND: +91 7477098233</a></li>
              <li><a href="mailto:evolvedgeagency1@gmail.com">mail: evolvedgeagency1@gmail.com</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">3D design & Animations</a></li>
              <li><a href="#">UI/UX Designs</a></li>
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