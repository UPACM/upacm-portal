import React from "react"
import { Link } from "gatsby"
import "../../styles/var.css"
import "../../styles/global.css"

export default function Navlink({name, to}) {
	return (
		<div class="header-navlink">
			<Link to={to}>
				<div class="header-navlink-left-triangle"></div>
				<span>{name}</span>
				<div class="header-navlink-right-triangle"></div>
			</Link>
		</div>
	)
}
