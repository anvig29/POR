import "./HeroImgStyles.css";
import React from 'react'
import Introimg from "../assets/hero.png"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={Introimg} alt="introimg"/>

        </div>
      <div className="content">
        <p>I am Anvi, </p>
        <h1>an aspiring CSE Engineer</h1>
     
      <div>
      <Link to="/project" className="btn">Projects</Link>
      <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
      </div>
    
    
    </div>
  )
}

export default Heroimg
