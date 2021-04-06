import React from "react"
import GalleryCard from "./subcomponents/gallery-card"

import "./gallery-cards.scss"

/* Component for opening a page section */
export default function GalleryCards({ images }) {
  return (
    <div id="gallery-cards">
      {images.map(image => (
        <GalleryCard key={image.caption} image={image} />
      ))}
    </div>
  )
}
