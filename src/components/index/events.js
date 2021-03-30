import React from "react"
import { Link } from "gatsby"

import EventData from "../../json/events.json"
import "./events.scss"

function EventDiamond({ event }) {
  return (
    <div class="diamond">
      <div class="diamond-content">
        <img src={event.imageSource} />
      </div>
    </div>
  )
}

export default function Events({ eventsSectionText }) {
  return (
    <div id="events">
      <div id="info">
        <h1>Events</h1>
        <p>{eventsSectionText}</p>
        <Link className="events-page-link">LEARN MORE</Link>
      </div>
      <div class="showcase-wrapper">
      <div id="showcase">
        {Object.keys(EventData).map(type => (
          <EventDiamond event={EventData[type].featured} />
        ))}
      </div>
      </div>
    </div>
  )
}
