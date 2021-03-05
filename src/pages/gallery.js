import React from "react"

import GalleryData from "../json/gallery.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import GalleryShowcase from "../components/gallery/gallery-showcase.js"

export default function Home() {
	return (
		<>
			<Header isIndex={false} />	
			<GalleryShowcase 
				header = {GalleryData.header}
				headerInfo = {GalleryData.headerInfo}
				images = {GalleryData.images} />
			<Footer />
		</>
	)
}
