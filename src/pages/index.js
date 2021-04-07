import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SiteMeta from "../components/site-meta.js"

import Landing from "../components/index/landing.js"
import Events from "../components/index/events.js"

import srcVid from "../assets/videos/landing-video.mp4"

import Opening from "../components/opening.js"
import SuperOpening from "../components/super-opening.js"
import SocialEmbed from "../components/index/social-embed.js"

import indexData from "../data/index.json"

export default function Home() {
  return (
    <>
      <SiteMeta pageName="Home" isIndex={true} />
      <Header isIndex={true} />
      <Landing
        videoSrcObj={srcVid}
        introText={indexData.landing.title}
        introSubText={indexData.landing.text}
      />
      <div class="wrapper incompressible">
        <SuperOpening
          title={indexData.siteIntro.title}
          titleColor="#0182ac"
          bgColor="white"
          mainTextAlign="center"
          text={indexData.siteIntro.text}
        />

        <Events eventsSectionText={indexData.eventsIntro.text} />

        <SuperOpening
          title={indexData.socialIntro.title}
          text={indexData.socialIntro.text}
          bgTextAlign="center"
          aosEffect={true}
          bgColor="white"
        >
          <SocialEmbed />
        </SuperOpening>
      </div>

      <Footer />
    </>
  )
}
