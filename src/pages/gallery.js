import React from "react"

import GalleryData from "../json/gallery.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Opening from "../components/opening.js"

import GalleryCards from "../components/gallery/gallery-cards.js"

export default function Home() {
  return (
    <>
      <Header isIndex={false} active="Gallery" />
      <Opening header={GalleryData.header} headerInfo={GalleryData.headerInfo}>
        <GalleryCards images={GalleryData.images} />
      </Opening>
      <Footer />
    </>
  )
}
