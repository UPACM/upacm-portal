import React from "react"

import "../../../styles/var.scss"
import "../../../styles/global.scss"

export default function HistoryTimestamp({ date, event }) {
  return (
    <div className="history-timestamp">
      <div className="timestamp-dot"></div>
      <span className="date">{date}</span>
      <span className="event">{event}</span>
    </div>
  )
}
