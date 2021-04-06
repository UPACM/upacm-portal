import React, { useEffect } from "react"
import AOS from "aos"
import { Link } from "gatsby"
import EventData from "../../data/events.json"

import "aos/dist/aos.css"
import "./events.scss"

function EventDiamond({ event }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <Link class="diamond" to={"/events/#" + event.header}>
      <div class="diamond-content">
        <img class="diamond-img" src={event.imageSource} />
      </div>
    </Link>
  )
}

export default function Events({ eventsSectionText }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div id="events">
      <div class="events-opening">
        <h1 class="title">Events</h1>
        <p class="text">{eventsSectionText}</p>
        <Link to="/events/" className="events-page-link">
          LEARN MORE
        </Link>
      </div>
      <div class="showcase-container">
        <div
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="550"
          id="showcase"
        >
          {Object.keys(EventData).map(type => (
            <EventDiamond event={EventData[type].featured} />
          ))}
        </div>
      </div>
    </div>
  )
}
