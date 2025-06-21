import React, { useState } from "react";
import "./ContactUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import all shapes
import sphere from "../assets/images/sphere.png";
import triangle from "../assets/images/triangle.png";
import pinkCube from "../assets/images/PinkCube.png";
import cube from "../assets/images/cube.png";
import cone from "../assets/images/cone.png";

const ContactUs = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [urgency, setUrgency] = useState("");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);

  // Validate email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      toast.error("Name, Email, and Message are required.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    const formData = {
      name,
      email,
      service,
      message,
      urgency,
      referral,
    };

    setLoading(true);

    try {
      const res = await fetch("https://evolve-edge-backend.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        toast.success("Your message was sent successfully!");

        // Clear form
        setName("");
        setEmail("");
        setService("");
        setMessage("");
        setUrgency("");
        setReferral("");
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="contact-container">
        {/* Shapes */}
        <img src={sphere} alt="Sphere" className="shape shape-sphere" />
        <img src={triangle} alt="Triangle" className="shape shape-triangle" />
        <img src={pinkCube} alt="Pink Cube" className="shape shape-pinkCube" />
        <img src={cube} alt="Cube" className="shape shape-cube" />
        <img src={cone} alt="Cone" className="shape shape-cone" />

        {/* Left */}
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

        {/* Right */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Which service are you looking for?"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="How time sensitive is your project?"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
            />
            <input
              type="text"
              placeholder="How did you hear about us?"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />

            <button type="submit" disabled={loading}>
               {loading ? (
    <div className="spinner-techy"></div>
  ) : (
    "SUBMIT"
  )}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
