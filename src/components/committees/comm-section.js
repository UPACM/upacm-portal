import React from "react"

import SocialWidget from "../../components/subcomponents/social_widget.js"

import "../../styles/var.css"
import "../../styles/global.css"
import "./comm-section.css"

//Type should only be a or b for an alternating list.

export default function CommSection({head, name, desc, portraitSrc, linkedin, facebook, twitter, youtube, }) {
	return (
		<div class="comm-section">
			<div class="wrapper">
				<div class="comm-content">
					<div class="comm-head">
						<img class="comm-head-img" src={portraitSrc} />
						<h3>Current Head< /h3>
						<p class="comm-head-name">{head}</p>
						<div class="comm-head-social-container">
							<SocialWidget
								elementClass="comm-head-social"
								social="linkedin"
								href={linkedin}/>
							<SocialWidget
								elementClass="comm-head-social"
								social="facebook"
								href={facebook}/>
							<SocialWidget
								elementClass="comm-head-social"
								social="twitter"
								href={twitter}/>
							<SocialWidget
								elementClass="comm-head-social"
								social="youtube"
								href={youtube}/>
						</div>
					</div>
					<div class="comm-info">
						<h1 class="comm-name">{name}</h1>
						<p class="comm-desc">
							{desc}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
