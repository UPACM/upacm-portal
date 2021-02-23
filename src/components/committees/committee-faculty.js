import React from "react"
import "./committee-faculty.scss"
import CommitteeCard from "./subcomponents/committee-card"

/* Component for rendering all faculty / advisers cards */
export default function CommitteeOpening({header, headerInfo, members }) {
	return <div id="committee-faculty">
		<div id="info">
			<h2 id="header">{header}</h2>
			<p id ="header-info">{headerInfo}</p>
		</div>
		<div id="cards">
			{members.map((member) =>
				<CommitteeCard name member={member} />)}
		</div>
	</div>
}