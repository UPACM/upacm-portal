import React from "react"

import EventData from "../../json/events.json"
import "./events.scss"

import EventDiamond from "./subcomponents/event-diamond.js"

export default function Events({ eventsSectionText }) {
	return <div id="events">
		<div id="info">
			<h1>Events</h1>
			<p>{eventsSectionText}</p>
			<button>LEARN MORE</button>
		</div>
		
		<div id="showcase">
			{Object.keys(EventData).map(type =>
				<EventDiamond event={EventData[type].featured}/>)  }
		</div>
	</div>
}
