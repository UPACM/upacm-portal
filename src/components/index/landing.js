import React from "react"

import "./landing.scss"
import landingFade from "../../assets/videos/landing-video-fade.webp"

export default function Landing({ videoSrcObj, introText, introSubText }) {
  return (
    <>
      <div className="landing incompressible" id="landing-video">
        <img src={landingFade} id="landing-video-fade" />
        <video preload="auto" loop={true} autoPlay={true} muted={true}>
          <source type="video/mp4" src={videoSrcObj} />
          Your browser does not support the window tag.
        </video>
      </div>
      <div className="landing incompressible" id="landing-overlay">
        <div className="wrapper">
          <div id="landing-text">
            <h1 className="hero" id="intro-text">
              {introText}
            </h1>
            <p id="intro-sub-text">{introSubText}</p>
          </div>
        </div>
      </div>
      <div id="landing-spacer"></div>
    </>
  )
}
