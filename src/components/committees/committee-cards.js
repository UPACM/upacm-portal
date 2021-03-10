import React from "react"
import "./committee-cards.scss"
import CommitteeCard from "./subcomponents/committee-card"

/* Component for rendering a list of members as a CommitteeCard */
export default function CommitteeCards({ members }) {
	return <div id="committee-cards">
			{members.map((member) =>
				<CommitteeCard member={member} />)}
		</div>
}