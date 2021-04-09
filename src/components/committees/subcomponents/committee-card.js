import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"
import "./committee-card.scss"

function BoldItalic({ name, text }) {
  return (
    <p className={name}>
      <b>
        <i>{text}</i>
      </b>
    </p>
  )
}

/* Subcomponent for rendering one member of a committee type*/
export default function CommitteeCard({ member }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div
      className={"committee-card"}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="650"
    >
      <div className="portrait-wrapper">
        <img alt="member" className="portrait" src={member.portraitSrc} />
      </div>
      <p className="name">
        <b>{member.name}</b>
      </p>
      {member.position.map(position => (
        <BoldItalic key={position} name="position" text={position} />
      ))}
    </div>
  )
}
