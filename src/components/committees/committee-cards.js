import React from "react"
import CommitteeCard from "./subcomponents/committee-card"

import "./committee-cards.scss"

/* Component for rendering a list of members as a CommitteeCard */
export default function CommitteeCards({ members }) {
  return (
    <div id="committee-cards">
      {members.map(member => (
        <CommitteeCard key={member.name + member.position[0]} member={member} />
      ))}
    </div>
  )
}
