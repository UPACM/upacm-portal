import React from "react"
import "../styles/var.css"
import "../styles/global.css"

export default function BlankContentFiller({fillerHeight}) {
	return (
		<div id="blank-content-filler" class="wrapper" style={{height: fillerHeight}}>
		</div>
	)
}
