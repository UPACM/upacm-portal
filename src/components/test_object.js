import React from "react"
import "../styles/var.scss"
import "../styles/global.scss"

export default function TestObject({background}) {
	return (
		<div style={{width: `200px`, height: `200px`, background: background}}>a</div>
	)
}
