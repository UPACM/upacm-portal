import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"
import "./sig-card.scss"

/* Subcomponent for rendering a special interest group */
export default function SigCard({ group }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div
      className="sig-card"
      style={{ backgroundImage: "url(" + group.portraitSrc + ")" }}
      data-aos="fade-up"
      data-aos-delay="80"
      data-aos-duration="650"
    >
      <div className="info">
        <h2 className="name">
          <b>{group.name}</b>
        </h2>
        <h3 className="head">
          <i>{group.head}</i>
        </h3>
        {group.description.map(paragraph => (
          <p key={paragraph} className="description">{paragraph} </p>
        ))}
        <div className="ripples">
          <div className="ripple" />
          <div className="ripple" />
          <div className="ripple" />
        </div>
      </div>
    </div>
  )
}
