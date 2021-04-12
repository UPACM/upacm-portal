import React from "react"

export default function TwitterEmbed(){
    return(
        <>
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
        </>
    )
}