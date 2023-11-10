import React from "react";
import "./index.css";
import './App.css';
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import WorkCardData from "../src/components/WorkCardData";
import { Route, Routes } from "react-router-dom";
import WorkCard from "./components/WorkCard";
import AchievementCard from "./components/AchievementCard";
import AchievementCardData from "./components/AchievementCardData";
/*import "./WorkCardStyles.css"*/


function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/project" element={<Project/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
    

  
   
   
   
   </>
 

  

);
}



export default App;
