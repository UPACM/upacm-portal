import React from "react"
import "./opening.scss"

/* Component for opening a page section */
export default function Opening({ header, headerInfo, order }) {
  return (
    <div id="opening" class={order}>
      <h2 id="header">{header}</h2>
      <p id="header-info">{headerInfo}</p>
    </div>
  )
}
