import { FaDiscord, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Pune</p>
                    <p>Maharashtra.</p>
                     </div>
                    </div>
                <div className="email">
                    <h4><FaMailBulk size={20}  style={{color: "#fff", marginRight:"2rem"}}/> anvigautam19@gmail.com</h4>
                </div>
                </div>
    

        <div className="right">
            <h4>Think twice, code once!</h4>
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
      </div>
      
    
  )
}

export default Footer
