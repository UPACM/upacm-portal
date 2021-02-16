import React from "react"
import "../../../styles/var.css"
import "../../../styles/global.css"
import "./faculty-card.scss"

/* Subcomponent for rendering one faculty / adviser member card */
export default function ExecutiveCard({member}) {
	return <div class = "faculty-card">
        <img class = "portrait" src={member.portraitSrc}/>
        <div class = "name">{member.name}</div>
        <div class = "position">{member.position}</div>
        <p class = "description">{member.description}</p>
    </div>
}