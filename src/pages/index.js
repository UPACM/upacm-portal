import React from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"

import Landing from "../components/index/landing.js"
import Events from "../components/index/events.js"

import srcVid from "../assets/videos/landing-video.mp4"

import Opening from "../components/opening.js"
import SocialEmbed from "../components/index/social-embed.js"

import Content from "../components/content.js"

export default function Home() {
  return (
    <>
      <Header isIndex={true} />
      <Landing
        videoSrcObj={srcVid}
        introText="Building communities to develop the future."
        introSubText="We envision a world where computing stands at the forefront of development - where we are able to use our skills to address the problems of tomorrow and create a positive impact on the community at large."
      />
      <Content>
        <Opening
          header="At UP ACM"
          headerStyle={{ color: "#0182ac" }}
          headerInfo="We envision a world where computing stands at the forefront of development - where we are able to use our skills to address the problems of tomorrow and create a positive impact on the community at large."
        />

        <Events eventsSectionText="The organization has pioneered several innovative projects for all levels of academic achievement, from the elementary level to the collegiate level. These ventures are integral to realizing our vision of forwarding the field of computing not only as science but as a medium for modern community development." />

        <Opening
          header="Stay Updated"
          headerInfo="You can reach us via Twitter, FB or email, if you have any queries. We make sure that our services can reach, and are reachable, by anyone and everyone."
          style={{ padding: "6% 0" }}
        >
          <SocialEmbed />
        </Opening>
      </Content>

      <Footer />
    </>
  )
}
