import React from "react"
import "./policy-layout.scss"

export default function PolicyLayout({children}) {
	return (
		<div id="policy-layout">
			<h1 id="title">Privacy Policy</h1>
		{children}
		</div>
	)
}
