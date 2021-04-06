import React from "react"
import { Link } from "gatsby"

import "../../styles/var.scss"
import "../../styles/global.scss"

export default function Navlink({ name, to, active }) {
  return (
    <div className=" navlink" id={active ? "active" : ""}>
      <Link to={to}>
        <span>{name}</span>
      </Link>
    </div>
  )
}
