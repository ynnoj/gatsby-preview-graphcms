import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function IndexPage({ data }) {
  const { products } = data

  return products.nodes.map((product) => (
    <React.Fragment>
      <h1 key={product.id}>{product.name}</h1>
      {product.images.map((image) => (
        <Img
          key={image.id}
          fixed={image.localFile.childImageSharp.fixed}
          fadeIn={false}
        />
      ))}
    </React.Fragment>
  ))
}

export const query = graphql`
  query IndexPageQuery {
    products: allGraphCmsProduct {
      nodes {
        id
        name
        slug
        images {
          id
          localFile {
            childImageSharp {
              fixed(width: 500) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
