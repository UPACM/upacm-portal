import React from "react"
import "../../../styles/var.css"
import "../../../styles/global.css"

export default function AchievementItem({name, event, date, staticFlavourImageSrc}){
	return (
		<div class="achievement-item">
			<img class="achievement-image" />
			<div class="achievement-text">
				<h2 class="name">{name}</h2>
				<p class="event">{event}</p>
				<p class="date">{date}</p>
			</div>
		</div>
	)
}