import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Landing from "../components/index/landing.js"
import Events from "../components/index/events.js"

import "../styles/var.scss"
import "../styles/global.scss"
import srcVid from "../assets/videos/landing-video.mp4"

import Opening from "../components/index/opening.js"
import SocialEmbed from "../components/index/social-embed.js"

export default function Home() {
	/*
	var y = <Events eventsSectionText="The organization has pioneered several innovative projects for all levels of academic achievement, from the elementary level to the collegiate level. These ventures are integral to realizing our vision of forwarding the field of computing not only as science but as a medium for modern community development."
	/>
	*/
	return (
		<>
			<Header isIndex={true} />
			<Landing videoSrcObj={ srcVid }
				introText="Building communities to develop the future."
				introSubText="We envision a world where computing stands at the forefront of development - where we are able to use our skills to address the problems of tomorrow and create a positive impact on the community at large."
			/>

			<Opening 
				header="At UP ACM" 
				headerInfo="We envision a world where computing stands at the forefront of development - where we are able to use our skills to address the problems of tomorrow and create a positive impact on the community at large."/>

			<Events eventsSectionText="The organization has pioneered several innovative projects for all levels of academic achievement, from the elementary level to the collegiate level. These ventures are integral to realizing our vision of forwarding the field of computing not only as science but as a medium for modern community development." />

			<Opening 
				header="Stay Updated" 
				headerInfo="Ex aliqua adipisicing cillum nulla elit veniam id. Minim minim ex amet laborum officia duis sint. Mollit consectetur cupidatat esse est fugiat ullamco adipisicing."/>
			<SocialEmbed />

			<Footer />
		</>
	)
}
