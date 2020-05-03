import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Merhaba</h1>
      <div className="photos">
        {data.allFile.edges.map(edge => {
          return (
            <Img key={edge.node.id} fluid={edge.node.childImageSharp.fluid} />
          )
        })}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//photos//" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
