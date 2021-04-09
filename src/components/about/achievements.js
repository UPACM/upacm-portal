import React from "react"

import AchievementItem from "./subcomponents/achievement-item.js"
import AboutData from "../../data/about.json"

import "./achievements.scss"

export default function Achievements() {
  return (
    <div className="wrapper" id="achievements-section">
      <div className="wrapper">
        <h1 id="achievementHeader">Achievements</h1>
        <div id="achievements-content">
          <p id="achievements-intro">{AboutData.achievementsIntro}</p>
          <div id="achievements-list">
            {AboutData.achievements.map(data => {
              var d = new Date(data.date)
              return (
                <AchievementItem
                  key={data.name + data.event + data.date}
                  date={d.getFullYear()}
                  name={data.name}
                  event={data.event}
                  scope={data.scope}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
