import React from "react"

import HistoryTimestamp from "./subcomponents/history-timestamp.js"
import AboutData from "../../data/about.json"

import "../../styles/var.scss"
import "../../styles/global.scss"
import "./history.css"

export default function History() {
  return (
    <div class=" wrapper" id="history-section">
      <div class="wrapper">
        <div id="history-intro">
          <h1>History</h1>
          {AboutData.historyIntro.map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div id="timeline-container">
          {AboutData.history.map(data => {
            var d = new Date(data.date)
            return (
              <HistoryTimestamp date={d.getFullYear()} event={data.event} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
