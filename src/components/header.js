import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Navlink from "../components/subcomponents/navlink.js"

import "../styles/components/header.css"

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
				<div class={scrolled || !isIndex ? 'main-portal header scrolled' : 'main-portal header'}>
					<div class="wrapper">
						<div class="main-portal home-link">
							<Link to="/">
								<img class="main-portal logo" src= {siteLogo} />
								<div class="main-portal header-text">
									<span>ASSOCIATION FOR COMPUTING MACHINERY</span>
									<span class="bottom-text">University of the Philippines Diliman Student Chapter, Inc.</span>
								</div>
							</Link>
						</div>
						<div class="navbar-button-container" onClick={() => setNavbarVisible(!navbarVisible)}>
							<img class="navbar-button" src={hamburgerIcon} />
						</div>
						<div class={navbarVisible ? 'main-portal nav-bar visible' : 'main-portal nav-bar'} id="main-portal-nav-bar">
							<Navlink to="/about/" name="About" />
							<Navlink to="/committees/" name="Committees" />
							<Navlink to="/" name="Contact" />
						</div>
					</div>
				</div>
				{!isIndex ? <div class="main-portal header-spacer"></div> : null}
			</>
		)
}

export default Header