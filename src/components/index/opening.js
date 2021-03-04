import React from "react"
import "./opening.scss"

/* Component for opening a page section */
export default function Opening({header, headerInfo, order}) {
        return <div id="opening" class={order}>	
                <h1 id="header">{header}</h1>
                <p id ="header-info">{headerInfo}</p>
	</div>
}