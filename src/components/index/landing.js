import React from "react"
//import sourceVid from "../assets/videos/landing_video.mp4"
import "../../styles/var.css"
import "../../styles/global.css"
import "../../styles/components/index/landing.css"

export default function Landing({videoSrcObj, introText, introSubText}) {
	return (
		<>
			<div class="main-portal landing" id="landing-video">
					<video preload="auto" loop="true" autoplay="true" muted="true">
						<source type="video/mp4" src={ videoSrcObj } />
						Your browser does not support the window tag.
					</video>
			</div>
			<div class="main-portal landing" id="landing-overlay">
				<div class="wrapper">
					<div id="landing-text">
						<h1 id="intro-text">{introText}</h1>
						<p id="intro-sub-text">{introSubText}</p>
					</div>
				</div>
			</div>
			<div class="main-portal" id="landing-spacer"></div>
		
		</>
	)
}
