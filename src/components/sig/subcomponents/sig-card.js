import React from "react"
import "../../../styles/var.css"
import "../../../styles/global.css"
import "./sig-card.scss"

/* Subcomponent for rendering a special interest group card */
export default function SigCard({group}) {
	return <div class = "sig-card">
        <img class = "background" src={group.portraitSrc}/>
        <div class="info">
            <div class = "name">{group.name}</div>
            <div class = "head">{group.head}</div>
            <div class = "description">{group.description}</div>
        </div>  
    </div>
}