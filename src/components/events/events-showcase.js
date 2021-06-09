import React from "react"
import Slider from "react-slick";
import EventsFeaturedCard from "./subcomponents/events-featured-card.js"
import EventsCard from "./subcomponents/events-card.js"
import Fade from "react-reveal/Fade"


import "./events-showcase.scss"

// Note: Due to dependencies, undefined behavior when there are less than 2 unfeatured cards
export default function EventsShowcase({ events }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1
	  };	
  return (
    <div className="events-showcase">
      <div className="featured">
        <EventsFeaturedCard event={events.featured} />
      </div>
      {<div className="">
		  <Fade ssrFadeout bottom duration={650} delay={100}>
		    <Slider {...settings}>
		      {events.unfeatured.map(event => (
			  	<EventsCard key={event.header} event={event} />	
		    	))}
            </Slider>
		  </Fade>
        </div>
      }
    </div>
  )
}
