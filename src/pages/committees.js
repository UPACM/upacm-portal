import React from "react"

import CommData from "../json/committees.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import CommitteeOpening from "../components/committees/committee-opening.js"
import CommitteeFaculty from "../components/committees/committee-faculty.js"
import CommitteeExecutive from "../components/committees/committee-executive.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<Header gap={true} />
				<CommitteeOpening 
					header = {CommData.opening.header}
					headerInfo = {CommData.opening.header}/>
				<CommitteeFaculty 
					header = {CommData.faculty.header}
					headerInfo = {CommData.faculty.headerInfo}
					members = {CommData.faculty.members} />
				<CommitteeExecutive 
					header = {CommData.executive.header}
					headerInfo = {CommData.executive.headerInfo}
					members = {CommData.executive.members} />
			<Footer />
		</>
	)
}
