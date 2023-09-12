import React from 'react'
import Navbar from  '../Components/Navbar';
import HeroImage2 from '../Components/HeroImage2';
import Footer from '../Components/Footer';
import Work from '../Components/Work';

const Project = () => {
  return (
      <div> 
        <Navbar />
        <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
        <Work />
        <Footer />
      </div>
  );
};

export default Project;