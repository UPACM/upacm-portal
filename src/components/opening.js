import React from "react"
import "./opening.scss"

/* General component for opening a page section */
export default function Opening({name, header, headerInfo, children,
	style, headerStyle, headerInfoStyle}) {
    return <div style={style} class="opening" id={name}>	
        <h2 style={headerStyle} id="header">{header}</h2>
        <p style={headerInfoStyle} id ="header-info">{headerInfo}</p>
        {children}
	</div>
}