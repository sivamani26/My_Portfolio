import React from 'react'
import Navbar from  '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
// import RegisterForm from '../Components/RegisterForm';
import DemoForm from '../Components/DemoForm';


const BookADemo = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="Book A Demo." text = "Please fill the details below"/>
      <DemoForm />
      <Footer/>
    </div>
  )
}

export default BookADemo;