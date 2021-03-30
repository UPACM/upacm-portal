import React from "react"
import "../../../styles/var.scss"
import "../../../styles/global.scss"

import achievementLocal from "../../../assets/images/achievement/achievement_local.png"
import achievementNational from "../../../assets/images/achievement/achievement_national.png"
import achievementInternational from "../../../assets/images/achievement/achievement_international.png"

export default function AchievementItem({ name, event, date, scope }) {
  const achievementIcon = {
    local: achievementLocal,
    national: achievementNational,
    international: achievementInternational,
  }

  return (
    <div class="achievement-item">
      <img
        class="achievement-image"
        src={achievementIcon[scope]}
        alt="achievment-logo"
      />
      <div class="achievement-text">
        <h6 class="name">{name}</h6>
        <b>
          <p class="event">{event}</p>
        </b>
        <p class="date">{date}</p>
      </div>
    </div>
  )
}
