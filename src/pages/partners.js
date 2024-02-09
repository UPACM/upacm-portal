import React from "react"

import PartnersData from "../data/partners.json"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"
import Opening from "../components/opening.js"

import PartnerCards from "../components/partner/partner-cards"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="Our Partners" sitePage="/partners/" isIndex={false} />
      <Header isIndex={false} />
      <Opening
        header={PartnersData.header}
        headerInfo={PartnersData.headerInfo}
      >
      </Opening>
      <Opening
        header={PartnersData.currentPartnerHeader}
        style={{background: 'white', paddingTop: '0'}}
        headerStyle={{color: 'black'}}
      >
        {<PartnerCards partners={PartnersData.currentPartnerList}/>}
      </Opening>
      <Opening
        header={PartnersData.formerPartnerHeader}
        style={{background: 'white', paddingTop: '0'}}

      >
        {<PartnerCards partners={PartnersData.formerPartnerList} />}
      </Opening>
      <Footer />
    </>
  )
}
