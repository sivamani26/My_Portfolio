import React from 'react'
import Navbar from  '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import RegisterForm from '../Components/RegisterForm';



const registerHere = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="Please Register Here." text = "Please fill the details below"/>
      <RegisterForm/>
      <Footer/>
    </div>
  )
}

export default registerHere;