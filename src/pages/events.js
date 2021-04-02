import React from "react"

import Header from "../components/header.js"
import Opening from "../components/opening.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"

import EventData from "../data/events.json"
import EventsShowcase from "../components/events/events-showcase.js"
export default function Home() {
  return (
    <>
      <SiteMeta pageName="Events" sitePage="/events/" isIndex={false} />
      <Header isIndex={false} active="Events" />
      <Opening
        header="Events"
        headerInfo="The organization has pioneered several innovative projects for all levels of academic achievement, from the elementary level to the collegiate level. These ventures are integral to realizing our vision of forwarding the field of computing not only as science but as a medium for modern community development."
      />
      {Object.keys(EventData).map(type => (
        <Opening
          header={EventData[type].header}
          headerInfo={EventData[type].headerInfo}
        >
          <EventsShowcase events={EventData[type]} />
        </Opening>
      ))}

      <Footer />
    </>
  )
}
