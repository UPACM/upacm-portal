import React from "react"

import HistoryTimestamp from "./subcomponents/history-timestamp.js"
import AboutData from "../../data/about.json"

import "./history.scss"

export default function History() {
  return (
    <div className=" wrapper" id="history-section">
      <div className="wrapper">
        <div id="history-intro">
          <h1>History</h1>
          {AboutData.historyIntro.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div id="timeline-container">
          {AboutData.history.map(data => {
            var d = new Date(data.date)
            return (
              <HistoryTimestamp key={data.event} date={d.getFullYear()} event={data.event} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
