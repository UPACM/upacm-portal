import React from "react"
import { Link } from "gatsby"
import SiteMeta from "../components/site-meta.js"


import "../styles/404.scss"

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function PageNotFoundError(){

    var captionStrings = [
        "Jammond got a bit lost.",
        "Jammond wandered a bit too far away from home.",
        "Jammond ran out of fuel.",
        "Jammond forgot his fuel scoop.",
        "Jammond needs the fuel rats.",
        "Jammond thinks he's not in Kansas anymore.",
        "Jammond explored too far out.",
        "Jammond achieved the Elite explorer rank, but at what cost?",
        "A neutron star overdrove his friendship drive.",
        "404 light years was too much for his fuel tank.",
        "Jammond's fuel tank could not afford 404 light years of travel."
    ]

    var capStr = captionStrings[getRandomInt(0, captionStrings.length)]

    return(
    <>
        <SiteMeta pageName="Page Not Found" sitePage="/404/" isIndex={false} />
        <div id="page-not-found" style={{backgroundImage: `url("/404.webp")`}}>
            <h1 id="page-not-found-title">Page not found.</h1>
            <img id="page-not-found-img" className="rot-anim" alt="A Jammondback Explorer slowly rotating in space." src="/404-assets/jammondback-explorer.webp"/>
            <p id="page-not-found-caption">{capStr}</p>
            <Link id="page-not-found-home-link" to="/">Click here to help him find his way back home.</Link>
        </div>
    </>
    )
}