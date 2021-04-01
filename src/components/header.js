import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Navlink from "../components/subcomponents/navlink.js"

import "./header.scss"

import siteLogo from "../assets/images/logo.png"
import hamburgerIcon from "../assets/images/hamburger-icon.png"

const Header = ({ isIndex, active }) => {
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false)

  useEffect(() => {
    const vh =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) / 2
    const handleScroll = () => {
      const isScrolled = window.scrollY > vh
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    document.addEventListener("scroll", handleScroll)
  })

  return (
		<>
			<div class={scrolled || !isIndex ? " header scrolled" : " header"}>
				<div class="wrapper">
					<div class=" home-link">
						<Link to="/">
							<img class=" logo" src={siteLogo} alt="logo" />
						</Link>
					</div>
					<div
						class="navbar-button-container"
						onClick={function() {
							setNavbarVisible(!navbarVisible);
							setScrolled(!navbarVisible || scrolled);
						}}
						aria-hidden="true">
						<img class="navbar-button" src={hamburgerIcon} alt="hamburger"/>
					</div>
				</div>	
			</div>
			<div class={navbarVisible ? " nav-bar visible" : " nav-bar"}
				id={scrolled || !isIndex ? "scrolled": "-nav-bar"}>
				<Navlink 
					to="/about/" 
					name="About" 
					active={active === "About"} />
				<Navlink
					to="/committees/"
					name="Committees"
					active={active === "Committees"} />				
				<Navlink 
					to="/sig/" 
					name="SIG" 
					active={active === "SIG"} />
				<Navlink 
					to="/events/" 
					name="Events" 
					active={active === "Events"} />
				<Navlink
					to="/gallery/"
					name="Gallery"
					active={active === "Gallery"} />
				<Navlink
					to="/contact/"
					name="Contact"
					active={active === "Contact"} />
			</div>
			{!isIndex ? <div class=" header-spacer"></div> : null}
		</>
	)
}

export default Header
