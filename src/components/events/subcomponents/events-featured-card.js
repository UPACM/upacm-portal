import React from "react"
import Fade from "react-reveal/Fade"
import { withPrefix } from "gatsby"
import "./events-featured-card.scss"

export default function EventsFeaturedCard({ event }) {
  return (
	<Fade ssrFadeout bottom duration={750} delay={150}>
      <div className="events-featured-card" id={event.header}>
        <img src={withPrefix(event.imageSource)} alt={event.header} />
        <div id="info">
          <h5 id="header">{event.header}</h5>
          <h6 id="subheader">
            <i>{event.subheader}</i>
          </h6>
          <p id="description">{event.info}</p>
        </div>
      </div>
    </Fade>
  )
}
