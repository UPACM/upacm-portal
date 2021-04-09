import React from "react"
import { Link, graphql } from "gatsby"

const MarkdownReader = ({ data }) => {
  return (
    <>
      <h1>Markdown Reader</h1>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <h4>{node.frontmatter.date}</h4>
          <p>{node.excerpt}</p>
          <Link to={node.fields.slug}>Link</Link>
          <hr />
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default MarkdownReader
