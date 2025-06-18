import React from 'react';
import Footer from './Footer';
import ThreeDServices from './ThreeDServices';
import WebServices from './WebServices';
import DesignServices from './DesignServices';
import BottomBanner from './BottomBanner';
import Navbar from './Navbar';

function Services() {
  return (
    <div className="services-page">
      <Navbar />
      <ThreeDServices />
      <WebServices />
      <DesignServices />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default Services;