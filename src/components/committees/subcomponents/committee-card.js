import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"
import "./committee-card.scss"

function BoldItalic({ name, text }) {
  return (
    <p class={name}>
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
      class={"committee-card"}
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="650"
    >
      <div class="portrait-wrapper">
        <img alt="member" class="portrait" src={member.portraitSrc} />
      </div>
      <p class={"name"}>
        <b>{member.name}</b>
      </p>
      {member.position.map(position => (
        <BoldItalic name="position" text={position} />
      ))}
    </div>
  )
}
