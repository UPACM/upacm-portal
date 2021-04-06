import React from "react"

import "../../../styles/var.scss"
import "../../../styles/global.scss"

export default function HistoryTimestamp({ date, event }) {
  return (
    <div class="history-timestamp">
      <div class="timestamp-dot"></div>
      <span class="date">{date}</span>
      <span class="event">{event}</span>
    </div>
  )
}
