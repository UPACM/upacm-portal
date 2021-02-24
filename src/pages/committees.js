import React from "react"

import CommData from "../json/committees.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import CommitteeOpening from "../components/committees/committee-opening.js"
import CommitteeCards from "../components/committees/committee-cards.js"

export default function Home() {
	return (
		<>
			<Header isIndex={false} active="Committees"/>
				<CommitteeOpening 
					header = {CommData.council.header}
					headerInfo = {CommData.council.headerInfo}
					order="second">
					<CommitteeCards
						members={CommData.council.members}/>
				</CommitteeOpening>
			<Footer />
		</>
	)
}
