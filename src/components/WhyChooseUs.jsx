import React, { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  
  const features = [
    { title: "Innovative", subtitle: "Minds", direction: "left" },
    { title: "Quality-Driven", subtitle: "", direction: "left" },
    { title: "Affordable", subtitle: "Solutions", direction: "right" },
    { title: "End-to-End", subtitle: "Services", direction: "right" },
    { title: "", subtitle: "", direction: "none" }, // Invisible box
    { title: "Real-World", subtitle: "Experience", direction: "left" },
    { title: "Collaborative", subtitle: "Approach", direction: "right" },
  ];

  const headingText = "WHY CHOOSE US?";

  // Typing effect with IntersectionObserver for heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animation when element comes into view
            setDisplayText("");
            setCurrentIndex(0);
            setShowCursor(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Typing effect animation
  useEffect(() => {
    if (currentIndex < headingText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(prev => prev + headingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed (100ms per character)

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, headingText]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Blink speed (500ms)

    return () => clearInterval(cursorInterval);
  }, []);

  // Card animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card:not(.invisible-box)');
            cards.forEach((card, index) => {
              const direction = card.dataset.direction;
              card.style.transform = 'translateX(0)';
              card.style.opacity = '1';
              card.style.transition = `transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.1}s, opacity 0.6s ease ${index * 0.1}s`;
            });
          } else {
            const cards = entry.target.querySelectorAll('.feature-card:not(.invisible-box)');
            cards.forEach((card) => {
              const direction = card.dataset.direction;
              card.style.transform = direction === 'left' ? 'translateX(-100px)' : 'translateX(100px)';
              card.style.opacity = '0';
              card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <div className="why-choose-us">
      <h2 ref={headingRef} className="section-title">
        {displayText}
        <span 
          className="typing-cursor" 
          style={{ opacity: showCursor && currentIndex < headingText.length ? 1 : 0 }}
        >
          |
        </span>
      </h2>
      <div className="features-grid" ref={gridRef}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${feature.direction === "none" ? "invisible-box" : ""}`}
            data-direction={feature.direction}
            style={{
              transform: feature.direction === 'left' ? 'translateX(-100px)' : 
                        feature.direction === 'right' ? 'translateX(100px)' : 'none',
              opacity: feature.direction === 'none' ? 0 : 0
            }}
          >
            {feature.direction !== "none" && (
              <>
                <h3 className="feature-title">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="feature-subtitle">{feature.subtitle}</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;