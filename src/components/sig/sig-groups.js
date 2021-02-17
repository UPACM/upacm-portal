import React from "react"
import "../../styles/var.css"
import "../../styles/global.css"
import "./sig-groups.scss"

import SigCard from "./subcomponents/sig-card.js"

/* Component for rendering all the special interest groups */
export default function SigGroups({ header, headerInfo, groups }) {
    return <div id="sig-groups">
        <div id="info">
            <div id="header">{header}</div>
            <div id="header-info">{headerInfo}</div>
        </div>
        <div id="cards">
            {groups.map((group) =>
                <SigCard group={group} />)}
        </div>
    </div>
}