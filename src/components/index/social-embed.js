import React from "react"

import "./social-embed.scss"

/* Component for referencing latest media posts */
export default function SocialEmbed() {
  return (
    <div id="social-embed">
      <div id="twitter">
	  	<a 
		  data-dnt="true" 
		  data-height="550" 
		  className="twitter-timeline" 
		  href="https://twitter.com/upacm?ref_src=twsrc%5Etfw">
	      Tweets by upacm
		</a>
		<script 
		  async 
		  charSet="utf-8"
		  src="https://platform.twitter.com/widgets.js"
		/> 
      </div>
    </div>
  )
}
