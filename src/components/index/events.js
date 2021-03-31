import React, { useEffect } from "react"
import { Link } from "gatsby"

import EventData from "../../json/events.json"
import Opening from "./opening.js"

import "./events.scss"

import AOS from "aos"
import "aos/dist/aos.css"

function EventDiamond({ event }) {
  return (
    <div class="diamond">
      <div class="diamond-content">
        <img class="diamond-img" src={event.imageSource} />
      </div>
    </div>
  )
}

export default function Events({ eventsSectionText }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  });

  return (
    /*
    
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="650"
    
        */
    <div id="events">
      <Opening 
        header="Events"
        headerInfo={eventsSectionText}
        //aosFade={true}
      />
      <Link className="events-page-link">LEARN MORE</Link>
      <div id="showcase">
        {Object.keys(EventData).map(type => (
          <EventDiamond event={EventData[type].featured} />
        ))}
      </div>
    </div>
  )
}
