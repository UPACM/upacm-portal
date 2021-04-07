import React from "react"
import AOS from "aos"
import "./super-opening.scss"

export default function SuperOpening({
    title,
    text,
    titleColor,
    bgColor,
    bgTextAlign,
    bgTextVAlign,
    mainTextAlign,
    opHeight,
    children,
    aosEffect}){

    var defaultBgColor = "white"
    var textContAlign = "center"

    if(mainTextAlign == "left"){
        textContAlign = "flex-start"
    }else if(mainTextAlign == "right"){
        textContAlign = "flex-end"
    }

    return (
        <div class="super-opening" style={{backgroundColor: bgColor === "" ? defaultBgColor : bgColor}}>
        <div class="super-opening-op" style={{height: opHeight}}>
            <h1 class="op-bg-title noselect" style={{color: titleColor, textAlign: bgTextAlign}}>{title}</h1>
            <div class="text-container" style={{alignItems: textContAlign}}>
                <h1 class="op-title" style={{color: titleColor, textAlign: mainTextAlign}}>{title}</h1>
                <p class="op-text" style={{textAlign: mainTextAlign}}>{text}</p>
            </div>
        </div>
        {children}
        </div>
    )
}