import React from "react"
import "./contact-social.scss"
import SocialWidget from "../../components/subcomponents/social-widget.js"

/* Component for displaying all available social links */
export default function ContactSocial() {
    return <div id="contact-social">	
        <SocialWidget social="twitter" href="https://twitter.com/upacm" />
		<SocialWidget social="facebook" href="https://twitter.com/upacm" />
		<SocialWidget social="linkedin" href="https://upacm.github.io/acm-website/https:%20ph.linkedin.com/company/upacm" />
		<SocialWidget social="youtube" href="https://www.youtube.com/user/upacmYT" />
	</div>
}