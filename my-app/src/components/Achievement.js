import "./AchievementCardStyles.css"
import AchievementCard from "./AchievementCard"
import AchievementCardData from "./AchievementCardData"

import React from 'react'
const Achievement = () => 
{
  return (
    
    <div className="achievement"> 
     <h1 className="achievement-heading">Leadership roles ,mentorships and achievements</h1>
    <div className="achievement-container">
        <div className="achievement-container">
        {AchievementCardData.map((val) => (
          <AchievementCard
          title={val.title}
          text={val.text} />
        ))}</div>

        </div>
    </div>
  )
}

export default Achievement;
