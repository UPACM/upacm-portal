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
				<CommSection type="a"/>
				<CommSection type="b"/>
				<CommSection type="a"/>
				<CommSection type="b"/>
				<CommSection type="a"/>
			<Footer />
		</>
	)
}
