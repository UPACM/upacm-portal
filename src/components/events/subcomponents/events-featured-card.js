import React from "react"
import Reveal from "react-reveal/Reveal"

import "./events-featured-card.scss"

export default function EventsFeaturedCard({ event }) {
  return (
    <Reveal bottom duration={400} delay={150}>
      <div className="events-featured-card" id={event.header}>
        <img src={event.imageSource} alt={event.header} />
        <div id="info">
          <h5 id="header">{event.header}</h5>
          <h6 id="subheader">
            <i>{event.subheader}</i>
          </h6>
          <p id="description">{event.info}</p>
        </div>
      </div>
    </Reveal>
  )
}
