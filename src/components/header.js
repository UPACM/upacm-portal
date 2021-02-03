import React from "react"
import { Link } from "gatsby"
import Navlink from "../components/subcomponents/navlink.js"

import "../styles/components/header.css"

import siteLogo from "../assets/images/logo.png"
import hamburgerIcon from "../assets/images/hamburger-icon.png"

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2

class Header extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {isScrolled: false, navbarVisible: false};
		this.handleClick = this.handleClick.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll)
	}
	
	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll)
	}
	
	handleScroll(){
		if (document.body.scrollTop > vh || document.documentElement.scrollTop > vh) {
			this.setState(
				state => ({
					isScrolled: false
				})
			);
		} else {
			this.setState(
				state => ({
					isScrolled: true
				})
		);
		}
		this.setState(
			state => ({
				isScrolled: !state.isScrolled
			})
		);
		console.log("Scrolled");
	}
	
	handleClick(){
		console.log("Clicked.")
		this.setState(
			state => ({
				navbarVisible: !state.navbarVisible
			})
		);
	}
	
	render(){
		return (
			<>
				<div class={this.state.isScrolled || !this.props.isIndex ? 'main-portal header scrolled' : 'main-portal header'} onscroll={this.handleScroll}>
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
						<div class="navbar-button-container" onClick={this.handleClick}>
							<img class="navbar-button" src={hamburgerIcon} />
						</div>
						<div class={this.state.navbarVisible ? 'main-portal nav-bar visible' : 'main-portal nav-bar'} id="main-portal-nav-bar">
							<Navlink to="/" name="About" />
							<Navlink to="/committees/" name="Committees" />
							<Navlink to="/" name="Contact" />
						</div>
					</div>
				</div>
				{!this.props.isIndex ? <div class="main-portal header-spacer"></div> : null}
			</>
		)
	}
}

export default Header