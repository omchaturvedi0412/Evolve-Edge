import React from 'react';
import styles from './BottomBanner.module.css';

const BottomBanner = () => {
  return (
    <div className={styles.bottomBanner}>
      <p>
        Need <span className={styles.highlight}>Something Else?</span><br />
        Sure we <span className={styles.highlight}>can help.</span>
      </p>
      <button className={styles.contactButton}>JUST CONTACT US</button>
    </div>
  );
};

export default BottomBanner;
