import React, { useEffect } from "react"
import "./events-showcase.scss"

import EventsFeaturedCard from "./subcomponents/events-featured-card.js"
import EventsCard from "./subcomponents/events-card.js"

// On scroll animations
import AOS from "aos"
import "aos/dist/aos.css"

export default function EventsShowcase({ events }) {	
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	  })

	return <div class="events-showcase">
		<div class="featured"
			data-aos="fade-up"
			data-aos-delay="80"
			data-aos-duration="550">
			<EventsFeaturedCard event = {events.featured} />
		</div>
		<div class="unfeatured"
			data-aos="fade-up"
			data-aos-delay="90"
			data-aos-duration="550">
			{events.unfeatured.map(event =>
				<EventsCard event={event} />)}
		</div>
	</div>
}