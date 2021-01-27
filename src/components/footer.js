import React from "react"

import SocialWidget from "../components/subcomponents/social_widget.js"

import "../styles/var.css"
import "../styles/global.css"
import "../styles/components/footer.css"

export default function Footer() {
	return (
		<div id="footer">
			<div id="footer-top">
				<div class="wrapper">
					<div id="footer-links-section" class="footer-section">
						<h1>UP ACM</h1>
						<div id="footer-links">
							<span>About</span>
							<span>Events</span>
							<span>Committees</span>
							<span>Partners</span>
							<span>Privacy Policy</span>
							<span>Automaton</span>
							<div class="clear"></div>
						</div>
					</div>
					<div id="footer-contact-section" class="footer-section">
						<h1>Contact Us</h1>
						<div id="footer-contacts">
							<span>council@upacm.net</span>
							<span>0920 859 5727 | 0905 301 8482</span>
							<span>Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines</span>
							<div class="clear"></div>
						</div>
					</div>
					<div id="footer-connect-section" class="footer-section">
						<h1>Connect with us!</h1>
						<SocialWidget elementClass="footer-social-widget" social="twitter" href="https://twitter.com/upacm"/>
						<SocialWidget elementClass="footer-social-widget" social="facebook" href="https://twitter.com/upacm"/>
						<SocialWidget elementClass="footer-social-widget" social="linkedin" href="https://upacm.github.io/acm-website/https:%20ph.linkedin.com/company/upacm"/>
						<SocialWidget elementClass="footer-social-widget" social="youtube" href="https://www.youtube.com/user/upacmYT"/>
						<div class="clear"></div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div id="footer-bottom">
				<div class="wrapper">
					<p>© 2019 Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.</p>
					<a href="#header"></a>
				</div>
			</div>
		</div>
	)
}
