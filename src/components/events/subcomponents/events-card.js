import React from "react"
import "./events-card.scss"

export default function EventsCard({ event }) {	
	return <div id="events-card"
			style={{backgroundImage:"url("+event.imageSource+")"}}>
		<div id="info">
			<h5 id="header">{event.header}</h5>
			<h6 id="subheader"><i>{event.subheader}</i></h6>
		</div>
	</div>
}