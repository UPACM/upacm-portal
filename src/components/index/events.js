import React from "react"

import EventData from "../../json/events.json"
import "./events.scss"

export default function Events({ eventsSectionText }) {
	return <div id="events">
		<div id="info">
			<h1>Events</h1>
			<p>{eventsSectionText}</p>
			<button>LEARN MORE ===</button>
		</div>
		
		<div id="navigation">
			{Object.keys(EventData).map(type =>
				<Diamond event={EventData[type].featured}/>)  }
		</div>
	</div>
}

const Diamond = ({event}) => (
	<div class="diamond">
		<img src={event.imageSource}/>
	</div>
);