import React from "react"
import { Link } from "gatsby"
import EventData from "../../data/events.json"

import "./events.scss"

function EventDiamond({ event }) {
  return (
    <Link className="diamond" to={"/events/#" + event.header}>
      <div className="diamond-content">
        <img
          className="diamond-img"
          src={event.imageSource}
          alt={event.header}
        />
      </div>
    </Link>
  )
}

export default function Events({ eventsSectionText }) {
  return (
    <div id="events">
      <div className="events-opening">
        <h1 className="title">Events</h1>
        <p className="text">{eventsSectionText}</p>
        <Link to="/events/" className="events-page-link">
          LEARN MORE
        </Link>
      </div>
      <div className="showcase-container">
        <div id="showcase">
          {Object.keys(EventData).map(type => (
            <EventDiamond
              key={EventData[type].featured.header}
              event={EventData[type].featured}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
