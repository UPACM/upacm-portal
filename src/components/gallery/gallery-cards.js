import React from "react"
import "./gallery-cards.scss"

import GalleryCard from "./subcomponents/gallery-card"

/* Component for opening a page section */
export default function GalleryCards({ images }) {
  return (
    <div id="gallery-cards">
      {images.map(image => (
        <GalleryCard image={image} />
      ))}
    </div>
  )
}
