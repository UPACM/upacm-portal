import React from "react"

import twitter_logo from "../../assets/images/social/twitter-logo.webp"
import facebook_logo from "../../assets/images/social/facebook-logo.webp"
import linkedin_logo from "../../assets/images/social/linkedin-logo.webp"
import youtube_logo from "../../assets/images/social/youtube-logo.webp"

import "./social-widget.scss"

export default function SocialWidget({ elementClass = "", social, href }) {
  var img_logo
  switch (social) {
    case "twitter":
      img_logo = twitter_logo
      break
    case "facebook":
      img_logo = facebook_logo
      break
    case "linkedin":
      img_logo = linkedin_logo
      break
    case "youtube":
      img_logo = youtube_logo
      break
    default:
      break
  }

  return (
    <a href={href}>
      <div className={"social-widget " + elementClass}>
        <img src={img_logo} alt={social} />
      </div>
    </a>
  )
}
