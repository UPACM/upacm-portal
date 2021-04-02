import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Landing from "../components/index/landing.js"
import Events from "../components/index/events.js"

import srcVid from "../assets/videos/landing-video.mp4"

import Opening from "../components/opening.js"
import SocialEmbed from "../components/index/social-embed.js"

import Content from "../components/content.js"

import indexData from "../data/index.json"

export default function Home() {
  return (
    <>
      <Header isIndex={true} />
      <Landing
        videoSrcObj={srcVid}
        introText={indexData.landing.title}
        introSubText={indexData.landing.text}
      />
      <Content>
        <Opening
          header={indexData.siteIntro.title}
          headerStyle={{ color: "#0182ac" }}
          headerInfo={indexData.siteIntro.text}
        />

        <Events eventsSectionText={indexData.eventsIntro.text} />

        <Opening
          header={indexData.socialIntro.title}
          headerInfo={indexData.socialIntro.text}
          style={{ padding: "6% 0" }}
          aosEffect={true}
        >
          <SocialEmbed />
        </Opening>
      </Content>

      <Footer />
    </>
  )
}
