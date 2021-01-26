import React from "react"
import { Link } from "gatsby";

import EventLink from "../../components/subcomponents/eventlink.js"

import algolympicsLinkImage from "../../assets/images/algolympics_index_img.png"

import "../../styles/var.css"
import "../../styles/global.css"
import "../../styles/components/index/events.css"


export default function Events({eventsSectionText}) {
	return (
		<div id="events">
			<div class="wrapper">
				<div id="events-section-intro-text">
					<h1 id="events-section-title">Events</h1>
					<p id="event-section-text">{eventsSectionText}</p>
				</div>
				<div id="events-section-links">
					<div id="algolympics-link" class="event-link">
						<Link to="/">
							<img src={algolympicsLinkImage}/>
							<h1>Algolympics</h1>
						</Link>
					</div>
					<div id="other-events">
						<EventLink name="Event 1" to="/" />
						<EventLink name="Event 2" to="/" />
						<EventLink name="Event 3" to="/" />
						<EventLink name="Event 4" to="/" />
						<EventLink name="Event 5" to="/" />
					</div>
				</div>
				
			</div>
		</div>
	)
}
