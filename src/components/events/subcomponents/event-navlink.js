import React from "react"
import { Link } from "gatsby"
import "../../../styles/var.css"
import "../../../styles/global.css"

export default function Navlink({name, to}) {
	return (
		<div class="events-page navlink">
			<Link to={to}>
				<span>{name}</span>
			</Link>
		</div>
	)
}
