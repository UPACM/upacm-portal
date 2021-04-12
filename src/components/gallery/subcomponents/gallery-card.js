import React from "react"

import "./gallery-card.scss"

/* Subcomponent for rendering a special interest group */
export default function GalleryCard({ image }) {
  return (
    <div className="gallery-card">
      <img src={image.source} alt="" />
      <p className="caption">{image.caption}</p>
    </div>
  )
}
