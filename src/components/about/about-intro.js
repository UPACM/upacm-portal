import React from "react"
//import siteLogo from "../../assets/images/logo.png"
import "../../styles/var.scss"
import "../../styles/global.scss"
import "./about-intro.scss"
import { useStaticQuery, graphql } from "gatsby"


const AboutIntro = () => {
	const data = useStaticQuery(
		graphql`
			query {
				allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/about-intro.md/"}}) {
					edges {
						node {
							html
						}
					}
				}
			}
		`
	)
	return (
		<>
			<div  id="about-intro-section">
				<img id="bg-image" src="/about-images/0-page-bg.png" alt="about"/>
				<div class="wrapper">
					<div id="intro-fade-in">
					</div>
					<div id="intro">
						<h1>About Us</h1>
						<div id="intro-body" dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutIntro