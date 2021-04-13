import React from "react"
import { Timeline } from 'react-twitter-widgets'
import "./social-embed.scss"


/* Component for referencing latest media posts */
export default function SocialEmbed() {
  return (
    <div id="social-embed">
      <div id="twitter">
      <Timeline
        className="twitter-timeline"
        dataSource={{
          sourceType: 'profile',
          screenName: 'upacm'
        }}
        options={{
          height: '800'
        }}
      />
      </div>
    </div>
  )
}
