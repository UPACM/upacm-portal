import React, { useEffect } from "react"
import AOS from "aos"
import EventsFeaturedCard from "./subcomponents/events-featured-card.js"
import EventsCard from "./subcomponents/events-card.js"

import "aos/dist/aos.css"
import "./events-showcase.scss"

export default function EventsShowcase({ events }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div className="events-showcase">
      <div
        className="featured"
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="550"
      >
        <EventsFeaturedCard event={events.featured} />
        {events.unfeatured.length === 1 && (
          <EventsFeaturedCard event={events.unfeatured[0]} />
        )}
      </div>
      {events.unfeatured.length > 1 && (
        <div
          className="unfeatured"
          data-aos="fade-up"
          data-aos-delay="90"
          data-aos-duration="550"
        >
          {events.unfeatured.map(event => (
            <EventsCard key={event.header} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
