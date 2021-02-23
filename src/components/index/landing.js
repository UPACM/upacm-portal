import React from "react"
//import sourceVid from "../assets/videos/landing_video.mp4"
import "./landing.scss"

export default function Landing({videoSrcObj, introText, introSubText}) {
	return (
		<>
			<div class=" landing" id="landing-video">
					<video preload="auto" loop="true" autoplay="true" muted="true">
						<source type="video/mp4" src={ videoSrcObj } />
						Your browser does not support the window tag.
					</video>
			</div>
			<div class=" landing" id="landing-overlay">
				<div class="wrapper">
					<div id="landing-text">
						<h1 class="hero" id="intro-text">{introText}</h1>
						<p id="intro-sub-text">{introSubText}</p>
					</div>
				</div>
			</div>
			<div  id="landing-spacer"></div>
		
		</>
	)
}
