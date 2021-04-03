import React from "react"

import CommData from "../data/committees.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"

import Opening from "../components/opening.js"
import CommitteeCards from "../components/committees/committee-cards.js"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="Committees" sitePage="/committees/" isIndex={false} />
      <Header isIndex={false} active="Committees" />

      <div class="wrapper incompressible">
      <Opening
        header={CommData.council.header}
        headerInfo={CommData.council.headerInfo}
      >
        <CommitteeCards members={CommData.council.members} />
      </Opening>
      </div>
      
      <Footer />
    </>
  )
}
