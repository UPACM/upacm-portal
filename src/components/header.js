import React from "react"
import { Link } from "gatsby"
import Navlink from "../components/subcomponents/navlink.js"

import "../styles/components/header.css"

import siteLogo from "../assets/images/logo.png"

export default function Header(){
	return (
		<>
			<div id="header">
				<div class="wrapper">
					<div id="header-logo">
					
						<Link to="/">
							<div id="logo-diamond">
								<div id="dia-top">
									<div id="dia-top-triangle"></div>
								</div>
								<img id="logo" src={siteLogo} />
								<div id="dia-bot"></div>
							</div>
							<div id="header-logo-text">
								<h1 id="header-logo-top-text">
									<span>ASSOCIATION FOR COMPUTING MACHINERY</span>
									<div id="header-logo-top-text-triangle"></div>
								</h1>
								<p id="header-logo-bot-text">
									<div id="header-logo-bot-text-left-triangle"></div>
									<span>University of the Philippines Diliman Student Chapter, Inc.</span>
									<div id="header-logo-bot-text-right-triangle"></div>
								</p>
							</div>
						</Link>
						
					</div>
						
					<div id="header-nav-container">
						<Navlink name="CONTACT" to="/about/" />
						<Navlink name="COMMITTEES" to="/about/" />
						<Navlink name="ABOUT" to="/about/" />
					</div>
				</div>
			</div>
			<div class="clear"></div>
		</>
	)
}