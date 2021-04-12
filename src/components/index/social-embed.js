import React from "react"
import loadable from '@loadable/component'

const TwitterEmbed = loadable(() => import('../twitter-embed.js'))

import "./social-embed.scss"

/* Component for referencing latest media posts */
export default function SocialEmbed() {
  return (
    <div id="social-embed">
      <div id="twitter">
	  	<TwitterEmbed />
      </div>
    </div>
  )
}
