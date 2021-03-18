import React from "react"
import "./events-cards.scss"
import EventCard from "./subcomponents/events-card"

/* Component for rendering a list of events */
export default function EventCards({ events }) {	
	return <div id="event-cards">
		<EventCard feature={true} event={events.featured} />
		{events.unfeatured.map((event) => <EventCard event={event} />)}
	</div>
}