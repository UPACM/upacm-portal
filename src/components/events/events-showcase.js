import React from "react"
import EventsFeaturedCard from "./subcomponents/events-featured-card.js"
import EventsCard from "./subcomponents/events-card.js"

import "./events-showcase.scss"

export default function EventsShowcase({ events }) {
  return (
    <div className="events-showcase">
      <div className="featured">
        <EventsFeaturedCard event={events.featured} />
        {events.unfeatured.length === 1 && (
          <EventsFeaturedCard event={events.unfeatured[0]} />
        )}
      </div>
      {events.unfeatured.length > 1 && (
        <div className="unfeatured">
          {events.unfeatured.map(event => (
            <EventsCard key={event.header} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
