import React from "react"
import { withPrefix } from "gatsby"
import AboutData from "../../data/about.json"

import "./mission-vision.scss"

export default function MissionVision() {
  return (
    <div className="wrapper incompressible" id="mission-vision-section">
      <div className="wrapper incompressible">
        <div className="mission-vision-part" id="mission">
          <div className="text">
            <h1>Mission</h1>
            <p>{AboutData.mission}</p>
          </div>
          <img
            className="showcase-image"
            src={withPrefix("/about-images/about_mission.webp")}
            alt="mission"
          />
        </div>
        <div className="mission-vision-part" id="vision">
          <div className="text">
            <h1>Vision</h1>
            <p>{AboutData.vision}</p>
          </div>
          <img
            className="showcase-image"
            src={withPrefix("/about-images/about_vision.webp")}
            alt="vision"
          />
        </div>
      </div>
    </div>
  )
}
