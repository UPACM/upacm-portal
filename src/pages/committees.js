import React from "react"

import CommData from "../data/committees.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"

import Opening from "../components/opening.js"
import CommitteeTabs from "../components/committees/committee-tabs.js"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="Committees" sitePage="/committees/" isIndex={false} />
      <Header isIndex={false} active="Committees" />

      <div className="wrapper incompressible">
        <Opening
          header={CommData.council.header}
          headerInfo={CommData.council.headerInfo}
        >
          <CommitteeTabs batches={CommData.council.batch} />
        </Opening>
      </div>

      <Footer />
    </>
  )
}
