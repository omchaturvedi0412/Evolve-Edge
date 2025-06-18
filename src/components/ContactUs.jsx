import React from "react";
import "./ContactUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-left">
          <h2>
            <span className="highlight-blue">Submit Your Project</span> &<br />
            <span className="highlight-yellow">Get a Precise Result</span>
          </h2>
          <p>
            Send us a brief describing all your project requirements. Then, we
            will prepare a detailed quote providing information about pricing,
            terms, and project timeline, and send it off for your approval.
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Which service are you looking for?" />
            <textarea placeholder="Tell us about your project" rows={4}></textarea>
            <input type="text" placeholder="How time sensitive is your project?" />
            <input type="text" placeholder="How did you hear about us?" />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
