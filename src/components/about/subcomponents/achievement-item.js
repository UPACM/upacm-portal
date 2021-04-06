import React from "react"

import achievementLocal from "../../../assets/images/achievement/achievement_local.png"
import achievementNational from "../../../assets/images/achievement/achievement_national.png"
import achievementInternational from "../../../assets/images/achievement/achievement_international.png"

import "../../../styles/var.scss"
import "../../../styles/global.scss"

export default function AchievementItem({ name, event, date, scope }) {
  const achievementIcon = {
    local: achievementLocal,
    national: achievementNational,
    international: achievementInternational,
  }

  return (
    <div className="achievement-item">
      <img
        className="achievement-image"
        src={achievementIcon[scope]}
        alt="achievment-logo"
      />
      <div className="achievement-text">
        <h6 className="name">{name}</h6>
        <b>
          <p className="event">{event}</p>
        </b>
        <p className="date">{date}</p>
      </div>
    </div>
  )
}
