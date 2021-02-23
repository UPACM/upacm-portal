import React from "react"
import { Link } from "gatsby"
import "../../styles/var.scss"
import "../../styles/global.scss"

export default function Navlink({name, to}) {
	return (
		<div class=" navlink">
			<Link to={to}>
				<span>{name}</span>
			</Link>
		</div>
	)
}
