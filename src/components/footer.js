import React from "react"
import { Link } from "gatsby"
import SocialWidget from "../components/subcomponents/social-widget.js"

import "../styles/var.scss"
import "../styles/global.scss"
import "./footer.css"

export default function Footer() {
	return (
		<div  id="footer">
			<div id="footer-top">
				<div class="wrapper">
				
					<div class="footer-section">
						<h1>UP ACM</h1>
						<div class="footer-section-links portal-links">
							<div class="link-col">
								<span><a href="/about/">About</a></span>
								<span><a href="/events/">Events</a></span>
								<span><a href="/committees/">Committees</a></span>
							</div>
							<div class="link-col">
							<span><a>Partners</a></span>
							<span><Link to="/privacy-policy/">Privacy Policy</Link></span>
							<span><a>Automaton</a></span>
							</div>
						</div>
					</div>
					
					<div class="footer-section">
						<h1>Contact Us</h1>
						<div class="footer-section-links contacts">
							<span>council@upacm.net</span>
							<span>0920 859 5727 | 0905 301 8482</span>
							<span>Department of Computer Science, University of the Philippines Diliman, Quezon City, Philippines</span>
							<div class="clear"></div>
						</div>
					</div>
					
					<div class="footer-section">
						<h1>Connect with us!</h1>
						<div class="footer-section-links socials">
							<SocialWidget elementClass="footer-social-widget" social="twitter" href="https://twitter.com/upacm" />
							<SocialWidget elementClass="footer-social-widget" social="facebook" href="https://twitter.com/upacm" />
							<SocialWidget elementClass="footer-social-widget" social="linkedin" href="https://upacm.github.io/acm-website/https:%20ph.linkedin.com/company/upacm" />
							<SocialWidget elementClass="footer-social-widget" social="youtube" href="https://www.youtube.com/user/upacmYT" />
						</div>
					</div>
					
				</div>
			</div>
			<div id="footer-bottom">
				<div class="wrapper">
					<span>© 2019 Association for Computing Machinery - University of the Philippines Diliman Student Chapter, Inc.</span>
				</div>
			</div>
		</div>
	)
}
