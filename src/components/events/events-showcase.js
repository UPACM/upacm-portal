import React from "react"
import "./events-showcase.scss"

import EventsFeaturedCard from "./subcomponents/events-featured-card.js"
import EventsCard from "./subcomponents/events-card.js"

export default function EventsShowcase({ events }) {	
	
	return <div class="events-showcase">
		<EventsFeaturedCard event = {events.featured} />
		<div class="unfeatured">
			{events.unfeatured.map(event =>
				<EventsCard event={event} />)}
		</div>
	</div>
}