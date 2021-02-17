import React from "react"
import "./executive-card.scss"

/* Subcomponent for rendering an executive member/student card */
export default function ExecutiveCard({member}) {
	return <div class = "executive-card">
        <img class = "portrait" src={member.portraitSrc}/>
        <h1 class = "name">{member.name}</h1>
        <div class = "position">{member.position}</div>
        <p class = "description">{member.description}</p>
    </div>
}