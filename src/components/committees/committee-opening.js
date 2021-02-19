import React from "react"
import "./committee-opening.scss"

/* Component for rendering all faculty / advisers cards */
export default function CommitteeOpening({header, headerInfo}) {
        return <div id="committee-opening">	
                <h1 id="header">{header}</h1>
                <p id ="header-info" class="fadein">{headerInfo}</p>
	</div>
}