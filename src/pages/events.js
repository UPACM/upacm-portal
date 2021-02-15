import React from "react"

import BlankContentFiller from "../components/blank-content-filler.js"
import EventsHeader from "../components/events/events-header.js"

import "../styles/var.css"
import "../styles/global.css"

export default function Home() {
	return (
		<>
			<EventsHeader isIndex={false} />
			<BlankContentFiller fillerHeight="2000px" />
		</>
	)
}
