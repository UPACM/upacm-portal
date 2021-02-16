import React from "react"

import HistoryTimestamp from "./subcomponents/history-timestamp.js"
import AboutData from "../../json/about.json"

import "../../styles/var.css"
import "../../styles/global.css"
import "./history.css"

export default function History(){
	return (
		<div class=" wrapper" id="history-section">
			<div class="wrapper">
				<div id="history-intro">
					<h1>History</h1>
					<p>{AboutData.historyIntro}</p>
				</div>
				<div id="timeline-container">
					{AboutData.history.map((data) => {
						var d = new Date(data.date);
						return <HistoryTimestamp date={d.getFullYear()} event={data.event} />
					})}
				</div>
			</div>
		</div>
	)
}
