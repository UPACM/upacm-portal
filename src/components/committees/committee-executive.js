import React from "react"
import "./committee-executive.scss"
import CommitteeCard from "./subcomponents/committee-card"

/* Component for rendering all student / executive member cards */
export default function CommitteeExecutive({ header, headerInfo, members }) {
	return <div id="committee-executive">
		<div id="info">
			<h2 id="header">{header}</h2>
			<p id ="header-info">{headerInfo}</p>
		</div>
		<div id="cards">
			{members.map((member) =>
				<CommitteeCard member={member} />)}
		</div>
	</div>
}