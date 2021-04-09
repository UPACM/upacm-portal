import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"
import "./gallery-card.scss"

/* Subcomponent for rendering a special interest group */
export default function GalleryCard({ image }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  return (
    <div
      className="gallery-card"
      data-aos="fade-up"
      data-aos-delay="70"
      data-aos-duration="550"
    >
      <img src={image.source} alt="" />
      <p className="caption">{image.caption}</p>
    </div>
  )
}
