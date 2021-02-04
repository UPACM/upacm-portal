import React from "react"

import SocialWidget from "../../components/subcomponents/social_widget.js"

import "../../styles/var.css"
import "../../styles/global.css"
import "../../styles/components/committees/comm_section.css"

//Type should only be a or b for an alternating list.

export default function CommSection({commHead, linkedin, facebook, twitter, youtube, commName, commDesc}) {
	return (
		<div class="comm-section">
			<div class="wrapper">
				<div class="comm-content">
					<div class="comm-head">
						<img class="comm-head-img" />
						<h3>Current Head< /h3>
						<p class="comm-head-name">{commHead}</p>
						<div class="comm-head-social-container">
							<SocialWidget elementClass="comm-head-social" social="linkedin" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<SocialWidget elementClass="comm-head-social" social="facebook" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<SocialWidget elementClass="comm-head-social" social="twitter" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<SocialWidget elementClass="comm-head-social" social="youtube" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
						</div>
					</div>
					<div class="comm-info">
						<h1 class="comm-name">{commName}</h1>
						<p class="comm-desc">
							{commDesc}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
