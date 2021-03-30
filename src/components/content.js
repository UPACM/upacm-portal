import React from "react"
import "../styles/var.scss"
import "../styles/global.scss"

import "./content.scss"

export default function Content({ children }) {
  return (
    <div class="content wrapper incompressible">
      { children }
    </div>
  )
}
