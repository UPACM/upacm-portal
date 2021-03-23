import React from "react"

export default function EventDiamond({event}) {
	return <div class="diamond">
		<img src={event.imageSource}/>
	</div>
}