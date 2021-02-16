import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"
import "./committee-opening.scss"

/* Component for rendering all faculty / advisers cards */
export default function CommitteeOpening({ header, headerInfo }) {
        return <div id="committee-opening">	
                <div id="header">{header}</div>
                <p id ="header-info">{headerInfo}</p>
	</div>
}