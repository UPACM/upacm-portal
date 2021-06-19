import React from "react"

import "./gallery-card.scss"

/* Subcomponent for rendering a special interest group */
export default function GalleryCard({ source }) {
  return (
    <div className="gallery-card">
      <img src={source} alt="" />
    </div>
  )
}
