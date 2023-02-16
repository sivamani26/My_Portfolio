import React from 'react'
import Navbar from  '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroI mage2';
import Form from '../Components/Form';
import DemoFarm from '../Components/DemoForm';

const BookADemo = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="Book A Demo." text = "Please fill the details below"/>
      {/* <DemoFarm /> */}
      <Form />
      <Footer/>
    </div>
  )
}

export default BookADemo;