import React from "react"
import Reveal from 'react-reveal/Reveal';

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
  return (
	<Reveal bottom duration={550} delay={400}>
      <div className="committee-card">
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
	</Reveal>
  )
}
