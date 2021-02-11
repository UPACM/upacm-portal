import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Navlink from "./subcomponents/event-navlink.js"

import "./events-header.css"

import siteLogo from "../../assets/images/logo.png"
import hamburgerIcon from "../../assets/images/hamburger-icon.png"


const EventsHeader = ( { isIndex } ) => {
		
		const [scrolled, setScrolled] = useState(false);
		const [navbarVisible, setNavbarVisible] = useState(false);
		
		useEffect(() => {
			const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2;
			const handleScroll = () => {
				const isScrolled = window.scrollY > vh;
				if (isScrolled !== scrolled) {
					setScrolled(!scrolled);
				}
			}
			document.addEventListener('scroll', handleScroll);
		});
	
		return (
			<>
				<div class={scrolled || !isIndex ? 'events-page header scrolled' : 'events-page header'}>
					<div class="wrapper">
						<div class="events-page home-link">
							<Link to="/">
								<img class="events-page logo" src= {siteLogo} />
								<div class="events-page header-text">
									<span>ASSOCIATION FOR COMPUTING MACHINERY</span>
									<span class="bottom-text">University of the Philippines Diliman Student Chapter, Inc.</span>
								</div>
							</Link>
						</div>
						<div class="navbar-button-container" onClick={() => setNavbarVisible(!navbarVisible)}>
							<img class="navbar-button" src={hamburgerIcon} />
						</div>
						<div class={navbarVisible ? 'events-page nav-bar visible' : 'events-page nav-bar'} id="events-page-nav-bar">
							<Navlink to="/events/events-list/" name="Events" />
						</div>
					</div>
				</div>
				{!isIndex ? <div class="events-page header-spacer"></div> : null}
			</>
		)
}

export default EventsHeader