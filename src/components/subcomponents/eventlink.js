import React from "react"
import { Link } from "gatsby"

import "../../styles/var.scss"
import "../../styles/global.scss"

export default function EventLink({ name, link, staticImage }) {
  return (
    <div
	  className="event-link"
      style={{ backgroundImage: "url(" + staticImage + ")" }}
    >
      <Link to={link}>
        <h1>{name}</h1>
      </Link>
    </div>
  )
}
