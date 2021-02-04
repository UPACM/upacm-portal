import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import CommSection from "../components/committees/comm_section.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header gap={true} />
				<CommSection 
					commHead="Enrique Luis P. Alvarado"
					commName="Digiforms"
					commDesc="Responsible for evolving the digital faculty of the organization, as well as find new ways to innovate and increase efficiency within the org."
				/>
				<CommSection 
					commHead="Enrique Luis P. Alvarado"
					commName="Digiforms"
					commDesc="Short stuff."
				/>
			<Footer />
		</>
	)
}
