import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

import MissionVision from "../components/about/mission_vision.js"
import BlankContentFiller from "../components/blank_content_filler.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header/>
			<BlankContentFiller fillerHeight="1000px" />
			<MissionVision />
			<BlankContentFiller fillerHeight="1000px" />
			<Footer />
		</>
	)
}
