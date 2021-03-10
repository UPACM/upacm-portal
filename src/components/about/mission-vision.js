import React from "react"
import "../../styles/var.scss"
import "../../styles/global.scss"
import "./mission-vision.css"
import AboutData from "../../json/about.json"

export default function MissionVision(){
	return (
		<div class="wrapper" id="mission-vision-section">
			<div class="wrapper">
				<div class="mission-vision-part" id="mission">
					<div class="text">
						<h1>Mission</h1>
						<p>{AboutData.mission}</p>
					</div>
					<img class="showcase-image" src="/about-images/about_mission.webp" alt="mission"/>
				</div>
				<div class="mission-vision-part" id="vision">
					<div class="text">
						<h1>Vision</h1>
						<p>{AboutData.vision}</p>
					</div>
					<img class="showcase-image" src="/about-images/about_vision.webp" alt="vision"/>
				</div>
			</div>
		</div>
	)
}
