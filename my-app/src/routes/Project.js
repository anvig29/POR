import React from 'react'
import Navbar from '../components/Navbar'
/*import HeroImg from '../components/Heroimg'*/
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'
import Achievement from '../components/Achievement'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2  heading="PROJECTS" text="Some of my recent works" />
      <Work/>
      
      <Achievement/>
      <Footer/>
    
      
    </div>
  )
}

export default Project
