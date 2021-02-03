import React from "react"

import SocialWidget from "../../components/subcomponents/social_widget.js"

import "../../styles/var.css"
import "../../styles/global.css"
import "../../styles/components/committees/comm_section.css"

//Type should only be a or b for an alternating list.

export default function CommSection({type="a"}) {
	return (
		<div class={"comm-section " + type}>
			<div class="wrapper">
				<div class="comm-content">
					<div class="comm-head-info">
						<img class="comm-head-img"/>
						<h3>Current Head< /h3>
						<p class="comm-head-name">Enrique Luis Ponce Alvarado</p>
						<div class="comm-head-social-container">
							<SocialWidget elementClass="comm-head-social" social="linkedin" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<SocialWidget elementClass="comm-head-social" social="facebook" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<SocialWidget elementClass="comm-head-social" social="twitter" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<SocialWidget elementClass="comm-head-social" social="youtube" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"/>
							<div class="clear"></div>
						</div>
					</div>
					<h1 class="comm-name">Committee</h1>
					<p class="comm-desc">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum mauris tempor mollis aliquet. Mauris consectetur accumsan quam, vel pellentesque velit fringilla commodo. Sed volutpat elit sem, a tempus ligula sollicitudin non. Duis mattis dui hendrerit neque finibus hendrerit. Nulla a felis vel sapien interdum facilisis sit amet at nibh.
					</p>
				</div>
			</div>
		</div>
	)
}
