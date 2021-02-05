import React from "react"
import siteLogo from "../../assets/images/logo.png"
import "../../styles/var.css"
import "../../styles/global.css"
import "./about_intro.css"


const AboutIntro = ({introText}) => {
	return (
		<>
			<div class="main-portal" id="about-intro-section">
				<div class="wrapper">
					<div id="intro-title">
						<h1>About</h1>
					</div>
					<div id="intro-text">
						<span>{introText}</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutIntro