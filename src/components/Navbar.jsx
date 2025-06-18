import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    navigate("/contact");
    // Scroll to top after navigation is complete
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

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
        <img src={Logo} alt="Logo" onClick={handleHomeClick} style={{ cursor: "pointer" }} />
      </div>
      
      <div className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}>
        <nav className="navbar">
          <ul className="navbar-links">
            <li onClick={handleHomeClick}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => navigate("/projects")}>Projects</li>
            <li onClick={() => scrollToSection("faq")}>FAQ's</li>
            <li onClick={handleContactClick}>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;