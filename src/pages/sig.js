import React from "react"

import SigData from "../data/sig.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"

import Opening from "../components/opening.js"
import SigCards from "../components/sig/sig-cards.js"

import "../styles/var.scss"
import "../styles/global.scss"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="SIGs" sitePage="/sig/" isIndex={false} />
      <Header gap={true} active="SIG" />

      <div class="wrapper incompressible">
        <Opening
          header={SigData.opening.header}
          headerInfo={SigData.opening.headerInfo}
        >
          <SigCards groups={SigData.groups} />
        </Opening>
      </div>

      <Footer />
    </>
  )
}
