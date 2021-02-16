import React from "react"

import SigData from "../json/sig.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import SigGroups from "../components/sig/sig-groups.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header gap={true} />
            <SigGroups 
				header={SigData.opening.header}
				headerInfo = {SigData.opening.headerInfo}
				groups={SigData.groups}/>
			<Footer />
		</>
	)
}
