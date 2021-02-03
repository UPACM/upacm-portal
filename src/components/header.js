import React from "react"
import { Link } from "gatsby"
import Navlink from "../components/subcomponents/navlink.js"

import "../styles/components/header.css"

import siteLogo from "../assets/images/logo.png"
import hamburgerIcon from "../assets/images/hamburger-icon.png"

export default function Header(){
	var isVisible = false
	var visibleClass = ""
	function handleClick(e){
		isVisible = !isVisible
		if(isVisible){
			visibleClass = "visible"
		}else{
			visibleClass = ""
		}
		console.log(visibleClass)
	}
	return (
		<>
			<div class="main-portal header">
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
					<div class="navbar-button-container" onClick={handleClick}>
						<img class="navbar-button" src={hamburgerIcon} />
					</div>
					<div class={"main-portal nav-bar " + visibleClass} id="main-portal-nav-bar">
						<Navlink to="/" name="About" />
						<Navlink to="/committees/" name="Committees" />
						<Navlink to="/" name="Contact" />
					</div>
				</div>
			</div>
		</>
	)
}