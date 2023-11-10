import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <HeroImg2  heading="ABOUT" text="I love solving real world problems" />
      <AboutContent/>
     
    </div>
  )
}

export default About
