import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"
import "./committee-executive.scss"

import ExecutiveCard from "./subcomponents/executive-card.js"

/* Component for rendering all student / executive member cards */
export default function CommitteeExecutive({ header, headerInfo, members }) {
	return <div id="committee-executive">
		<div id="info">
			<div id="header">{header}</div>
			<p id ="header-info">{headerInfo}</p>
		</div>
		<div id="cards">
			{members.map((member) =>
				<ExecutiveCard member={member} />)}
		</div>
	</div>
}