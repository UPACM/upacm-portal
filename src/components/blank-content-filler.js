import React from "react"
import "../styles/var.scss"
import "../styles/global.scss"

export default function BlankContentFiller({fillerHeight}) {
	return (
		<div id="blank-content-filler" class="wrapper" style={{height: fillerHeight}}>
		</div>
	)
}
