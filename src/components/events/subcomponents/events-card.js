import React from "react"
import Fade from "react-reveal/Fade"

import "./events-card.scss"

export default function EventsCard({ event }) {
  return (
	<Fade ssrFadeout bottom duration={650} delay={100}>
      <div className="events-card" id={event.header}>
        <img src={event.imageSource} alt={event.header} />
        <div id="info">
          <h5 id="header">{event.header}</h5>
          <h6 id="subheader">
            <i>{event.subheader}</i>
          </h6>
        </div>
      </div>
    </Fade>
  )
}
