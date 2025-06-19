import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BottomBanner.module.css';

const BottomBanner = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className={styles.bottomBanner}>
      <p>
        Need <span className={styles.highlight}>Something Else?</span><br />
        Sure we <span className={styles.highlight}>can help.</span>
      </p>
      <button 
        className={styles.contactButton}
        onClick={handleContactClick}
      >
        JUST CONTACT US
      </button>
    </div>
  );
};

export default BottomBanner;