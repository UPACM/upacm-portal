import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"
import "./mission_vision.css"

export default function MissionVision(){
	return (
		<div class="main-portal" id="mission-vision-section">
			<div class="wrapper">
				<div class="mission-vision-part" id="mission">
					<div class="text">
						<h1>Mission</h1>
						<p>The members of the chapter are united under an advocacy to build communities and develop the future through the cultivation of a shared interest in computing. It is the goal of the organization to open avenues and introduce opportunities for learning about computer science and other related fields.</p>
					</div>
					<img class="showcase-image" />
				</div>
				<div class="mission-vision-part" id="vision">
					<div class="text">
						<h1>Vision</h1>
						<p>The merger of programming knowledge and humanitarian work is the means by which UP ACM achieves its goal of engineering sustainable development for areas within its sphere of influence and beyond.</p>
					</div>
					<img class="showcase-image" />
				</div>
			</div>
		</div>
	)
}
