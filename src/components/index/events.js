import React, { useEffect } from "react"
import { Link } from "gatsby"

import EventData from "../../json/events.json"
import Opening from "./opening.js"

import "./events.scss"

import AOS from "aos"
import "aos/dist/aos.css"

function EventDiamond({ event }) {
  return (
    <Link class="diamond" to={"/events/#" + event.header} >
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
      <Opening header="Events" headerInfo={eventsSectionText} aosEffect={true}>
        <Link to="/events/" className="events-page-link">LEARN MORE</Link>
      </Opening>
      <div id="showcase">
        {Object.keys(EventData).map(type => (
          <EventDiamond event={EventData[type].featured} />
        ))}
      </div>
    </div>
  )
}
