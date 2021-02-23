import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Navlink from "../components/subcomponents/navlink.js"

import "./header.css"

import siteLogo from "../assets/images/logo.png"
import hamburgerIcon from "../assets/images/hamburger-icon.png"


const Header = ( { isIndex } ) => {
		
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
				<div class={scrolled || !isIndex ? ' header scrolled' : ' header'}>
					<div class="wrapper">
						<div class=" home-link">
							<Link to="/">
								<img class=" logo" src= {siteLogo} />
							</Link>
						</div>
						<div class="navbar-button-container" onClick={() => setNavbarVisible(!navbarVisible)}>
							<img class="navbar-button" src={hamburgerIcon} />
						</div>
						<div class={navbarVisible ? ' nav-bar visible' : ' nav-bar'} id="-nav-bar">
							<Navlink to="/about/" name="About" />
							<Navlink to="/committees/" name="Committees" />
							<Navlink to="/sig/" name="SIG" />
							<Navlink to="/events/" name="Events" />
							<Navlink to="/" name="Contact" />
						</div>
					</div>
				</div>
				{!isIndex ? <div class=" header-spacer"></div> : null}
			</>
		)
}

export default Header