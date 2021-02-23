import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import BlankContentfiller from "../components/blank-content-filler.js"
import PolicyLayout from "../components/privacy-policy/policy-layout.js"

import "../styles/global.scss"

export default function PrivacyPolicy({ data }) {
	return (
		<>
			<Header isIndex={false}/>
			<div class="content wrapper index">
				<PolicyLayout>
					<div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
				</PolicyLayout>
			</div>
			<Footer />
		</>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(filter: {fileAbsolutePath: {regex: "markdown/privacy-policy.md/"}}) {
			edges {
				node {
					html
				}
			}
		}
	}
`
