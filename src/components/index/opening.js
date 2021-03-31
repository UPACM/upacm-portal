import React, { useEffect } from "react"
import "./opening.scss"

import AOS from "aos"
import "aos/dist/aos.css"

/* Component for opening a page section */
export default function Opening({ header, headerInfo, order, aosEffect, children }) {
  
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  });
  var openingAOS=""
  var openingDelay=""
  var openingDuration=""
  if(aosEffect){
      openingAOS="fade-up"
      openingDelay="80"
      openingDuration="650"
  }

  return (
    <div class={"opening " + order}
      data-aos={openingAOS}
      data-aos-delay={openingDelay}
      data-aos-duration={openingDuration}
    >
      <h2 class="opening-header">{header}</h2>
      <p class="opening-header-info">{headerInfo}</p>
      {children}
    </div>
  )
}
