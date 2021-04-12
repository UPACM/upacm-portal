import React from "react"

import "./sig-card.scss"

/* Subcomponent for rendering a special interest group */
export default function SigCard({ group }) {
  return (
    <div
      className="sig-card"
      style={{ backgroundImage: "url(" + group.portraitSrc + ")" }}
    >
      <div className="info">
        <h2 className="name">
          <b>{group.name}</b>
        </h2>
        <h3 className="head">
          <i>{group.head}</i>
        </h3>
        {group.description.map(paragraph => (
          <p key={paragraph} className="description">
            {paragraph}{" "}
          </p>
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
