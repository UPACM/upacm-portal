import React from "react"

import HistoryTimestamp from "./subcomponents/history-timestamp.js"
import HistoryData from "../../json/about/history.json"

import "../../styles/var.css"
import "../../styles/global.css"
import "./history.css"

export default function History(){
	return (
		<div class="main-portal wrapper" id="history-section">
			<div class="wrapper">
				<div id="history-intro">
					<h1>History</h1>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>
				<div id="timeline-container">
					{HistoryData.history.map((data) => {
						var d = new Date(data.date);
						return <HistoryTimestamp date={d.getFullYear()} event={data.event} />
					})}
				</div>
			</div>
		</div>
	)
}
