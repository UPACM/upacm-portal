import React from "react"
import Slider from "react-slick";
import GalleryCard from "./subcomponents/gallery-card"
import Fade from "react-reveal/Fade"

import "./gallery-cards.scss"

/* Component for opening a page section */
export default function GalleryCards({ images }) {
  const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
    lazyLoad: true,
  };	
  
    return (
      <div id="gallery-cards">
      <Fade ssrFadeout bottom duration={650} delay={100}>
        <Slider {...settings}>
          {images.map(imageSource => (
            <GalleryCard key={imageSource} source={imageSource} />
          ))}
        </Slider>
      </Fade>
    </div>
    )
    
}

