import React from "react"
import "./opening.scss"

/* Component for opening a page section */
export default function Opening({ header, headerInfo, order }) {
  return (
    <div class={"opening " + order}>
      <h2 class="opening-header">{header}</h2>
      <p class="opening-header-info">{headerInfo}</p>
    </div>
  )
}
