import React, { useEffect } from "react"
import "./events-card.scss"

// On scroll animations
import AOS from "aos"
import "aos/dist/aos.css"

/* Subcomponent for rendering one event*/
export default function EventCard({ event, feature }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div
      class={"event-card"}
      id={feature && "feature"}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="650"
      style={{ backgroundImage: "url(" + event.imageSource + ")" }}
    >
      <div id="info">
        <h5>{event.header}</h5>
        <b>
          <p>{event.subheader}</p>
        </b>
        <p class="info">{event.info}</p>
      </div>
    </div>
  )
}
