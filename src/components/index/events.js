import React from "react"
import { Link } from "gatsby";

import EventLink from "../../components/subcomponents/eventlink.js"
import EventData from "../../json/events.json"
import "./events.scss"


export default function Events({eventsSectionText}) {
	return (
		<div id="events-section" class=" wrapper">
			<div class="wrapper">
				<div id="events-section-intro-text">
					<h1>Events</h1>
					<p>{eventsSectionText}</p>
					<Link to="/events/">
						<span id="events-page-link">
								Learn more
						</span>
					</Link>
				</div>
				<div id="events-section-links">
					<div id="algolympics-link" class="event-link">
						<Link to="/algolympics/">
							<h1>Algolympics</h1>
						</Link>
					</div>
					<div id="other-events">
						<div class="col">
							<EventLink
								name={EventData.featuredEvents[0].eventName}
								link={EventData.featuredEvents[0].eventLink}
								staticImage={EventData.featuredEvents[0].eventImage}
							/>
							<EventLink
								name={EventData.featuredEvents[1].eventName}
								link={EventData.featuredEvents[1].eventLink}
								staticImage={EventData.featuredEvents[1].eventImage}
							/>
						</div>
						<div class="col">
							<EventLink
								name={EventData.featuredEvents[2].eventName}
								link={EventData.featuredEvents[2].eventLink}
								staticImage={EventData.featuredEvents[2].eventImage}
							/>
							<EventLink
								name={EventData.featuredEvents[3].eventName}
								link={EventData.featuredEvents[3].eventLink}
								staticImage={EventData.featuredEvents[3].eventImage}
							/>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}
