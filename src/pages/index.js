import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Landing from "../components/index/landing.js"
import Events from "../components/index/events.js"

import BlankContentFiller from "../components/blank_content_filler.js"
import TestObject from "../components/test_object.js"

import "../styles/var.css"
import "../styles/global.css"
import srcVid from "../assets/videos/landing_video.mp4"

export default function Home() {
	var y = <Events eventsSectionText="The organization has pioneered several innovative projects for all levels of academic achievement, from the elementary level to the collegiate level. These ventures are integral to realizing our vision of forwarding the field of computing not only as science but as a medium for modern community development."
	/>
	return (
		<>
			<Header isIndex={true} />
			<Landing videoSrcObj={ srcVid }
				introText="Building communities to develop the future."
				introSubText="We envision a world where computing stands at the forefront of development - where we are able to use our skills to address the problems of tomorrow and create a positive impact on the community at large."
			/>
			<BlankContentFiller fillerHeight="2000px"/>
			<Footer />
		</>
	)
}
