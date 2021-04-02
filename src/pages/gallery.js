import React from "react"

import GalleryData from "../data/gallery.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"
import Opening from "../components/opening.js"

import GalleryCards from "../components/gallery/gallery-cards.js"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="Gallery" sitePage="/gallery/" isIndex={false} />
      <Header isIndex={false} active="Gallery" />
      <Opening header={GalleryData.header} headerInfo={GalleryData.headerInfo}>
        <GalleryCards images={GalleryData.images} />
      </Opening>
      <Footer />
    </>
  )
}
