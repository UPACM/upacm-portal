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
    <Link className="diamond" to={"/events/#" + event.header}>
      <div className="diamond-content">
        <img className="diamond-img" src={event.imageSource} alt={event.header}/>
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
      <div className="events-opening">
        <h1 className="title">Events</h1>
        <p className="text">{eventsSectionText}</p>
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
