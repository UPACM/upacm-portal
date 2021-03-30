import React from "react"

import AchievementItem from "./subcomponents/achievement-item.js"
import AboutData from "../../json/about.json"

import "../../styles/var.scss"
import "../../styles/global.scss"
import "./achievements.scss"

export default function Achievements() {
  return (
    <div class="wrapper" id="achievements-section">
      <div class="wrapper">
        <h1 id="achievementHeader">Achievements</h1>
        <div id="achievements-content">
          <p id="achievements-intro">{AboutData.achievementsIntro}</p>
          <div id="achievements-list">
            {AboutData.achievements.map(data => {
              var d = new Date(data.date)
              return (
                <AchievementItem
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
