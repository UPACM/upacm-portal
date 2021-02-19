import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"
import "./sig-groups.scss"

import SigCard from "./subcomponents/sig-card.js"

/* Component for rendering all the special interest groups */
export default function SigGroups({ header, headerInfo, groups }) {
    return <div id="sig-groups">
        <div id="info">
            <h1 id="header">{header}</h1>
            <div id="divider" />
            <p id="header-info">{headerInfo}</p>
        </div>
        <div id="cards">
            {groups.map((group) =>
                <SigCard group={group} />)}
        </div>
    </div>
}