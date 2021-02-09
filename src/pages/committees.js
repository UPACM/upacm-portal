import React from "react"

import CommData from "../json/committees.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import CommSection from "../components/committees/comm-section.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header gap={true} />
			{CommData.committees.map((data) => (
				<CommSection
					name={data.name}
					desc={data.description}
					head={data.head}
					portraitSrc={data.portraitSrc}
				/>
			))}
			<Footer />
		</>
	)
}
