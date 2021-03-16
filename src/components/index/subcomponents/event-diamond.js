import React from "react"
import "./event-diamond.scss"

export default function Diamond({event}){
	return <div class="diamond" style={{backgroundImage: "url("+ event.eventImage+")"}}>
		<h6>{event.eventName}</h6>
	</div>
}