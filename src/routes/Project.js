import React from 'react'
import Navbar from  '../Components/Navbar';
import HeroImage2 from '../Components/HeroImage2';
import Footer from '../Components/Footer';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';

const Project = () => {
  return (
      <div> 
        <Navbar />
        <HeroImage2 heading="PROJECTS." text="Some of my most rcent works" />
        <Work />
        <PricingCard />
        <Footer />
      </div>
  );
};

export default Project