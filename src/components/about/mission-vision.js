import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"
import "./mission-vision.css"
import AboutData from "../../json/about.json"

export default function MissionVision(){
	return (
		<div  id="mission-vision-section">
			<div class="wrapper">
				<div class="mission-vision-part" id="mission">
					<div class="text">
						<h1>Mission</h1>
						<p>{AboutData.mission}</p>
					</div>
					<img class="showcase-image" src="/about-images/1-mission-img.png"/>
				</div>
				<div class="mission-vision-part" id="vision">
					<div class="text">
						<h1>Vision</h1>
						<p>{AboutData.vision}</p>
					</div>
					<img class="showcase-image" src="/about-images/1-vision-img.png"/>
				</div>
			</div>
		</div>
	)
}
