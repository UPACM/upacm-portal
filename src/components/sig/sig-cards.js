import React from "react"
import "./sig-cards.scss"

import SigCard from "./subcomponents/sig-card.js"

/* Component for rendering all the special interest groups */
export default function SigCards({ header, headerInfo, groups }) {
    return <div id="sig-cards">
    	{groups.map((group) => 
			<SigCard group={group} />)}
    </div>
    
}