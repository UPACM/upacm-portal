import React from "react"

import "./super-opening.scss"

export default function SuperOpening({ title, text }) {
  return (
    <div className="super-opening">
      <h1 className="op-title">{title}</h1>
      <p className="op-text">{text}</p>
    </div>
  )
}
