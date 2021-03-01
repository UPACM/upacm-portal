import React from "react"
import "../../../styles/var.scss"
import "../../../styles/global.scss"

export default function AchievementItem({name, event, date, staticFlavourImageSrc}){
	return (
		<div class="achievement-item">
			<img class="achievement-image" alt=""/>
			<div class="achievement-text">
				<h6 class="name">{name}</h6>
				<b><p class="event">{event}</p></b>
				<p class="date">{date}</p>
			</div>
		</div>
	)
}