import React from "react"
import Slider from "react-slick";
import EventsFeaturedCard from "./subcomponents/events-featured-card.js"
import EventsCard from "./subcomponents/events-card.js"
import Fade from "react-reveal/Fade"


import "./events-showcase.scss"
export default function EventsShowcase({ events }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2
	  };	
  return (
    <div className="events-showcase">
      <div className="featured">
        <EventsFeaturedCard event={events.featured} />
        {events.unfeatured.length === 1 && (
          <EventsFeaturedCard event={events.unfeatured[0]} />
        )}
      </div>
      {events.unfeatured.length > 1 && (
        <div className="">
		  <Fade ssrFadeout bottom duration={650} delay={100}>
		    <Slider {...settings}>
		      {events.unfeatured.map(event => (
			  	<EventsCard key={event.header} event={event} />	
		    	))}
            </Slider>
		  </Fade>
        </div>
      )}
    </div>
  )
}
