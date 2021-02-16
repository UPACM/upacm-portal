import React from "react"
import "../../../styles/var.css"
import "../../../styles/global.css"
import "./executive-card.scss"

/* Subcomponent for rendering an executive member/student card */
export default function ExecutiveCard({member}) {
	return <div class = "executive-card">
        <img class = "portrait" src={member.portraitSrc}/>
        <div class = "name">{member.name}</div>
        <div class = "position">{member.position}</div>
        <p class = "description">{member.description}</p>
    </div>
}