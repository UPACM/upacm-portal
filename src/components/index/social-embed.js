import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

import "./social-embed.scss"

/* Component for referencing latest media posts */
export default function SocialEmbed() {
  return (
    <div id="social-embed">
      <div id="twitter">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="upacm"
          options={{ height: 550 }}
        />
      </div>
    </div>
  )
}
