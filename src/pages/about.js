import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

import AboutIntro from "../components/about/about-intro.js"
import MissionVision from "../components/about/mission-vision.js"
import History from "../components/about/history.js"
import Achievements from "../components/about/achievements.js"
import BlankContentFiller from "../components/blank-content-filler.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header isIndex={true}/>
			<AboutIntro />
			<MissionVision />
			<History />
			<Achievements />
			<BlankContentFiller fillerHeight="1000px" />
			<Footer />
		</>
	)
}
