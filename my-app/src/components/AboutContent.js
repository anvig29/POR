import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'
import img1 from '../assets/anvi.png'
import img2 from '../assets/bg.png'
import { FaDiscord, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"

const AboutContent = () => {
  return (

    <div className='about'>
        <div className='left-section'>
            <h1>My Introduction</h1>
            <p> A CSE sophomore who is a curious head and loves solving real-world problems.
<p> 
            My personality is strengthened by my resolute for the pursuit of my goals and my driven attitude 
            </p>
            </p>

            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
            
       
       
        </div>
        <div className='right-section'>
            <div className='img-containerr'>
                <div className='img-stack top'>
                    <img src={img1} className='img' alt='true'/>
                    </div>
                    <img src={img2} className='img' alt='true'/>


            </div>
            <div className="social">
                <div>
                    <a href="https://www.linkedin.com/in/anvig29/" _target="blank">
            <FaLinkedin size={30}  style={{color: "#fff", marginRight:"1rem"}}/></a></div>
            <div>
                <a href="https://github.com/anvig29" _target="blank">
            <FaGithub size={30}  style={{color: "#fff", marginRight:"1rem"}}/></a></div>
            <div>
                <a href="anvi2901#0301" _target="blank">
            <FaDiscord size={30}  style={{color: "#fff", marginRight:"1rem"}}/> </a> </div>
            </div>
            


        </div>
        
      
    </div>
    
  )
}

export default AboutContent
