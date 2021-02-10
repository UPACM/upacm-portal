import React from "react"
import { Link } from "gatsby"
import "../../styles/var.css"
import "../../styles/global.css"

export default function EventLink({name, link, staticImage}) {
	return (
		<div class="event-link" style={{backgroundImage: "url(" + staticImage + ")"}}>
			<Link to={link}>
				<h1>{name}</h1>
			</Link>
		</div>
	)
}
