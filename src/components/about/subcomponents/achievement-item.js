import React from "react"
import "../../../styles/var.css"
import "../../../styles/global.css"

export default function AchievementItem({name, event, date, staticFlavourImageSrc}){
	return (
		<div class="achievement-item">
			<div class="timestamp-dot"></div>
			<h2 class="achievement-name">{name}</h2>
			<p class="event">{event}</p>
			<p class="date">{date}</p>
		</div>
	)
}