import React, {useState, useEffect} from "react"
import { Link } from "gatsby"

import "./policy-layout.scss"

function Subcomponent() {
	return (
		<p>I am a subcomponent</p>
	)
}

export default function PolicyLayout({children}) {
	return (
		<div id="policy-layout">
			<h1 id="title">Privacy Policy</h1>
		{children}
		</div>
	)
}
