import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

import MissionVision from "../components/about/mission_vision.js"
import AboutIntro from "../components/about/about_intro.js"
import BlankContentFiller from "../components/blank_content_filler.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header/>
			<AboutIntro introText="The Association for Computing Machinery - UP Diliman Student Chapter, Inc. (UP ACM) is the first student chapter of the Association for Computing Machinery in the Philippines." />
			<MissionVision />
			<BlankContentFiller fillerHeight="1000px" />
			<Footer />
		</>
	)
}
