import React from "react"
import EventsHeader from "../components/events/events-header.js"

import "../styles/var.scss"
import "../styles/global.scss"

export default function Home() {
	return (
		<>
			<EventsHeader isIndex={false} />
		</>
	)
}
