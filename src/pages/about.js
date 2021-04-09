import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"

import AboutIntro from "../components/about/about-intro.js"
import MissionVision from "../components/about/mission-vision.js"
import History from "../components/about/history.js"
import Achievements from "../components/about/achievements.js"

import "../styles/var.scss"
import "../styles/global.scss"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="About us" sitePage="/about/" isIndex={false} />
      <Header isIndex={false} active="About" />

      <div className="wrapper incompressible">
        <AboutIntro />
        <MissionVision />
        <History />
        <Achievements />
      </div>

      <Footer />
    </>
  )
}
