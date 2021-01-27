import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"

import twitter_logo from "../../assets/images/social/twitter_logo.png"
import facebook_logo from "../../assets/images/social/facebook_logo.png"
import linkedin_logo from "../../assets/images/social/linkedin_logo.png"
import youtube_logo from "../../assets/images/social/youtube_logo.png"

export default function SocialWidget({elementClass="", social, href}) {
	
	var img_logo
	switch(social){
		case "twitter":
			img_logo = twitter_logo
			break;
		case "facebook":
			img_logo = facebook_logo
			break;
		case "linkedin":
			img_logo = linkedin_logo
			break;
		case "youtube":
			img_logo = youtube_logo
			break;
		default:
			break;
	}
	
	return (
		<a href={href}>
			<div class={"social-widget " + elementClass}>
					<img src={img_logo}/>
			</div>
		</a>
	)
}
