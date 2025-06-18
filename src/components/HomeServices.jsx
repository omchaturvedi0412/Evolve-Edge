import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import styles from "./HomeServices.module.css";
import { useNavigate } from "react-router-dom";

const services = [
  "Research & Analytics", "Web Flow", "Domain, Hosting", "Set up and Deployment",
  "3D Modeling", "WCAG", "3D Animation", "UI/UX Design", "Trends",
  "Graphic Design", "3D", "VFX", "Frontend Development",
  "Complete Website Solution", "Backend Development", "Chatbots", "Logo Design"
];

const HomeServices = () => {
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const animationFrameRef = useRef(null);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to initialize Matter.js world
  const initPhysics = () => {
    const engine = Matter.Engine.create();
    const world = engine.world;
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    engineRef.current = engine;

    const ground = Matter.Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true });

    Matter.World.add(world, [ground, leftWall, rightWall]);

    // Adjust base radius based on screen size
    const baseRadius = windowWidth < 768 ? 30 : 65;
    const sizeVariation = windowWidth < 768 ? 15 : 20;

    const bodies = services.map((service, index) => {
      const radius = baseRadius + Math.random() * sizeVariation;
      const body = Matter.Bodies.circle(
        100 + Math.random() * (width - 200),
        -index * 40,
        radius,
        {
          restitution: 0.9,
          friction: 0.1,
          label: service
        }
      );
      body.customRadius = radius;
      return body;
    });

    Matter.World.add(world, bodies);

    runnerRef.current = Matter.Runner.create();
    Matter.Runner.run(runnerRef.current, engine);

    const update = () => {
      setPositions(
        bodies.map((body) => ({
          x: body.position.x,
          y: body.position.y,
          r: body.customRadius,
          label: body.label
        }))
      );
      animationFrameRef.current = requestAnimationFrame(update);
    };
    update();
  };

  // Cleanup Matter.js world
  const cleanup = () => {
    if (runnerRef.current && engineRef.current) {
      Matter.Runner.stop(runnerRef.current);
      Matter.World.clear(engineRef.current.world);
      Matter.Engine.clear(engineRef.current);
      runnerRef.current = null;
      engineRef.current = null;
    }
    cancelAnimationFrame(animationFrameRef.current);
    setPositions([]);
  };

  // Replay on every scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cleanup();
          initPhysics();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      cleanup();
    };
  }, [windowWidth]); // Add windowWidth as dependency to re-init on resize

  const handleExploreClick = () => {
    navigate("/services");
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>SERVICES.</h2>
      </div>

      <div 
  className={`${styles.contentContainer} ${windowWidth < 768 ? styles.mobileHeight : ''}`} 
  ref={containerRef}
>
        <p className={styles.subtitle}>
          From UI/UX to web to 3D — we do it all with purpose.
          Your vision, powered by our expertise and execution.
        </p>

        <div className={styles.ballWrapper}>
          {positions.map((circle, index) => (
            <div
              key={`${circle.label}-${index}`}
              className={`${styles.circle} ${index % 3 === 0 ? styles.yellow : styles.pink}`}
              style={{
                width: `${circle.r * 2}px`,
                height: `${circle.r * 2}px`,
                left: `${circle.x - circle.r}px`,
                top: `${circle.y - circle.r}px`,
                fontSize: `${Math.max(8, circle.r * 0.3)}px` // Dynamic font size based on ball size
              }}
            >
              <span>{circle.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.exploreLink}>
        <p>For More Services -- </p>
        <button 
          onClick={handleExploreClick}
          className={styles.exploreButton}
        >
          Click Here
        </button>
      </div>
    </section>
  );
};

export default HomeServices;