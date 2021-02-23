import React from "react"

import CommData from "../json/committees.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import CommitteeOpening from "../components/committees/committee-opening.js"
import CommitteeExecutive from "../components/committees/committee-executive.js"

export default function Home() {
	return (
		<>
			<Header gap={true} isIndex={true}/>
				<CommitteeOpening 
					header = {CommData.opening.header}
					headerInfo = {CommData.opening.headerInfo}/>
				<CommitteeExecutive 
					header = {CommData.executive.header}
					headerInfo = {CommData.executive.headerInfo}
					members = {CommData.executive.members} />
			<Footer />
		</>
	)
}
