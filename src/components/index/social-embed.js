import React from "react"
import loadable from '@loadable/component'
import "./social-embed.scss"


const TwitterEmbed = loadable(() => import('../twitter-embed'))


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
