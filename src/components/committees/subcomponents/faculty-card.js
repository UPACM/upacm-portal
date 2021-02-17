import React from "react"
import "./faculty-card.scss"

/* Subcomponent for rendering one faculty / adviser member card */
export default function ExecutiveCard({member}) {
	return <div class = "faculty-card">
        <img class = "portrait" src={member.portraitSrc}/>
        <h1 class = "name">{member.name}</h1>
        <div class = "position">{member.position}</div>
        <p class = "description">{member.description}</p>
    </div>
}