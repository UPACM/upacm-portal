import React from "react"
import "./committee-faculty.scss"

import FacultyCard from "./subcomponents/faculty-card.js"

/* Component for rendering all faculty / advisers cards */
export default function CommitteeOpening({ header, headerInfo, members }) {
	return <div id="committee-faculty">
		<div id="info">
			<h1 id="header">{header}</h1>
			<div id="divider" />
			<p id ="header-info">{headerInfo}</p>
		</div>
		<div id="cards">
			{members.map((member) =>
				<FacultyCard member={member} />)}
		</div>
	</div>
}