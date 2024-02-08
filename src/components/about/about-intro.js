import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { withPrefix } from "gatsby"
import siteLogo from "../../assets/images/logo.png"

import "./about-intro.scss"

const AboutIntro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/about-intro.md/" } }
        ) {
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
      <div id="about-intro-section">
        <img id="bg-image" src={withPrefix("/about-images/about_header.webp")} alt="about" />
        <div className="wrapper">
          <div id="intro-fade-in"></div>
          <img src={withPrefix(siteLogo)} alt="logo" id="logo" />
          <div id="intro">
            <h1>About Us</h1>
            <div
              id="intro-body"
              dangerouslySetInnerHTML={{
                __html: data.allMarkdownRemark.edges[0].node.html,
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutIntro
