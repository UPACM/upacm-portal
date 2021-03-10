import React from "react"

import SigData from "../json/sig.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Opening from "../components/opening.js"
import SigCards from "../components/sig/sig-cards.js"

import "../styles/var.scss"
import "../styles/global.scss"

export default function Home() {
	return (
		<>
			<Header gap={true} active="SIG"/>
				<Opening 
					header={SigData.opening.header}
					headerInfo = {SigData.opening.headerInfo}>
						<SigCards groups={SigData.groups}/>
				</Opening>
			<Footer />
		</>
	)
}
