import React from "react"
import Fade from 'react-reveal/Fade';

import "./gallery-card.scss"

/* Subcomponent for rendering a special interest group */
export default function GalleryCard({ image }) {
  return (
	<Fade ssrFadeout bottom duration={750} delay={200} fraction={0.5}>
      <div className="gallery-card">
        <img src={image.source} alt="" />
        <p className="caption">{image.caption}</p>
      </div>
	</Fade>
  )
}
