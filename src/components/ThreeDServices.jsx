import React from 'react';
import styles from './ThreeDServices.module.css';

const ThreeDServices = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>3D Animation & Modeling Services</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>3D Modeling</h3>
          <ul>
            <li>Product modeling (automotive, gadgets, etc.)</li>
            <li>Environment and prop modeling</li>
            <li>Architectural visualization</li>
            <li>Low-poly & high-poly modeling</li>
            <li>Texturing and material setup</li>
            <li>UV mapping and unwrapping</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>3D Animation</h3>
          <ul>
            <li>Character animation</li>
            <li>Product animation</li>
            <li>Motion graphics</li>
            <li>Rigging and skinning</li>
            <li>Keyframe animation</li>
            <li>Motion capture cleanup</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Visual Effects (VFX)</h3>
          <ul>
            <li>Particle effects (smoke, fire, sparks, etc.)</li>
            <li>Simulation (cloth, liquid, soft body)</li>
            <li>Lighting and rendering (realistic or stylized)</li>
            <li>Compositing with video footage</li>
            <li>Green screen VFX integration</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.toolsContainer}>
        <h3>TOOLS WE USE</h3>
        <div className={styles.toolsList}>
          <ul>
          <li >Blender</li>
          <li >Unreal Engine 5</li>
          <li >Maya</li>
          <li >Substance Painter</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThreeDServices;