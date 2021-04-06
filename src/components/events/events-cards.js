import React from "react"
import EventCard from "./subcomponents/events-card"

import "./events-cards.scss"

/* Component for rendering a list of events */
export default function EventCards({ events }) {
  return (
    <div class="event-cards">
      <EventCard feature={true} event={events.featured} />
      {events.unfeatured.map(event => (
        <EventCard event={event} />
      ))}
    </div>
  )
}
