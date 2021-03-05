import React from "react"
import "./gallery-showcase.scss"

import GalleryCard from "./subcomponents/gallery-card"

/* Component for opening a page section */
export default function GalleryShowcase({header, headerInfo, images}) {
    return <div id="gallery-showcase">	
        <div id="info">
			<h1 id="header">{header}</h1>
			<p id ="header-info">{headerInfo}</p>
		</div>
		<div id="cards">
			{images.map((image) =>
                <GalleryCard image={image} />)}
		</div>
	</div>
}