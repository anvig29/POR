import "./AchievementCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

export default function AchievementCard(props){
    
        return(
            <div className="ach-card">
                <h2 className="ach-title">{props.title}</h2>
                <div className="ach-details">
                    <p>{props.text}</p>
                </div>
            </div>
        )
  
}


