import React from "react"

import EventData from "../../json/events.json"
import "./events.scss"

export default function Events({ eventsSectionText }) {

	function Diamond({event}){
		return <div class="diamond">
			<img src={event.eventImage}/>
		</div>
	}


	return <div id="events">

				<div id="info">
					<h1>Events</h1>
					<p>{eventsSectionText}</p>
					<button>LEARN MORE ===</button>
				</div>
		
		<div id="navigation">
			{EventData.featuredEvents.map(event =>
				<Diamond event={event} />)}
		</div>
	</div>
	
}