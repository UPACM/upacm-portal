import React from "react"
import Fade from 'react-reveal/Fade';
import { withPrefix } from "gatsby";
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
	<Fade ssrFadeout bottom duration={650} delay={100} fraction={0.5}>
      <div className="committee-card">
       <div className="portrait-wrapper">
          <img alt="member" className="portrait" src={withPrefix(member.portraitSrc)} />
        </div>
        <p className="name">
          <b>{member.name}</b>
        </p>
        {member.position.map(position => (
          <BoldItalic key={position} name="position" text={position} />
        ))}
      </div>
	</Fade>
  )
}
