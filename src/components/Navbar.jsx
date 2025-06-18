import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo-static">
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
      </div>
      
      <div className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}>
        <nav className="navbar">
          <ul className="navbar-links">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => navigate("/projects")}>Projects</li>
            <li onClick={() => scrollToSection("faq")}>FAQ's</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;