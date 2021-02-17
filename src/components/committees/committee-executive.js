import React from "react"
import "./committee-executive.scss"

import ExecutiveCard from "./subcomponents/executive-card.js"

/* Component for rendering all student / executive member cards */
export default function CommitteeExecutive({ header, headerInfo, members }) {
	return <div id="committee-executive">
		<div id="info">
			<h1 id="header">{header}</h1>
			<div id="divider" />
			<p id ="header-info">{headerInfo}</p>
		</div>
		<div id="cards">
			{members.map((member) =>
				<ExecutiveCard member={member} />)}
		</div>
	</div>
}