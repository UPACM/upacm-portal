import React from "react"
import "./contact-opening.scss"

/* Component for opening a page section */
export default function ContactOpening({header, headerInfo, alt}) {
        return <div id="contact-opening" class={alt && "alt"}>	
                <h1 id="header">{header}</h1>
                <p id ="header-info">{headerInfo}</p>
	</div>
}