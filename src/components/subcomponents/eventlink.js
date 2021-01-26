import React from "react"
import { Link } from "gatsby"
import "../../styles/var.css"
import "../../styles/global.css"

export default function EventLink({name, to, imgObjSrc}) {
	return (
		<div class="event-link">
			<Link to={to}>
				<img src={imgObjSrc} />
				<h1>{name}</h1>
			</Link>
		</div>
	)
}
