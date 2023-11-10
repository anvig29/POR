import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      
      <HeroImg2 heading="CONTACT" text="Feel free to connect with me!"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
