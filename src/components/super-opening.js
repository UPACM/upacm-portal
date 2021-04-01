import React from "react"

import "./super-opening.scss"

export default function SuperOpening({title, text}){
    return (
        <div class="super-opening">
            <h1 class="op-title">{title}</h1>
            <p class="op-text">{text}</p>
        </div>
    )
}