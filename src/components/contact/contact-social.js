import React from "react"
import Fade from "react-reveal/Fade"

import SocialWidget from "../../components/subcomponents/social-widget.js"

import "./contact-social.scss"

/* Component for displaying all available social links */
export default function ContactSocial() {
  return (
    <Fade ssrFadeout bottom duration={550} delay={100}>
      <div id="contact-social">
        <SocialWidget social="twitter" href="https://twitter.com/upacm" />
        <SocialWidget social="facebook" href="https://twitter.com/upacm" />
        <SocialWidget
          social="linkedin"
          href="https://www.linkedin.com/company/upacm/"
        />
        <SocialWidget
          social="youtube"
          href="https://www.youtube.com/user/upacmYT"
        />
      </div>
    </Fade>
  )
}
