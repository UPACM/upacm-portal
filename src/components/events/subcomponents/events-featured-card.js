import React from "react"

import "./events-featured-card.scss"

export default function EventsFeaturedCard({ event }) {
  return (
    <div class="events-featured-card" id={event.header}>
      <img src={event.imageSource} />
      <div id="info">
        <h5 id="header">{event.header}</h5>
        <h6 id="subheader">
          <i>{event.subheader}</i>
        </h6>
        <p id="description">{event.info}</p>
      </div>
    </div>
  )
}
