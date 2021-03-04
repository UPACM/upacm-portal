import React from "react"
import "./social-embed.scss"
import { TwitterTimelineEmbed} from 'react-twitter-embed';

/* Component for opening a page section */
export default function SocialEmbed() {
    return <div id="social-embed">	
		<iframe
			class="social-card"
			src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fupacm&width=300&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=700" 
			scrolling="yes" 
			allowtransparency="true" 
			frameborder="0"/>
		 <TwitterTimelineEmbed 
			class="social-card"
			sourceType="profile"
			screenName="upacm"
			options={{height: 400}}
		/>

			
	</div>
}