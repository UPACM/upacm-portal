import React from "react"
import "./committee-opening.scss"

/* Component for opening a page section */
export default function CommitteeOpening({header, headerInfo, order, children}) {
        return <div id="committee-opening" class={order} >	
                <h1 id="header">{header}</h1>
                <p id ="header-info">{headerInfo}</p>
                {children}
	</div>
}