import React from 'react'
import { Link, graphql } from 'gatsby'

const PostPage = ({ data }) => {
  console.log(data)

  return (
    <div>
      post
      <Link to="/">Go to main page</Link>
    </div>
  )
}

export const query = graphql`
  query GetPostById($id: String!) {
      allContentfulPost(filter: {id: {eq: $id}}) {
          edges {
              node {
                  id
                  postId
                  updatedAt
                  createdAt
                  title
                  description {
                      id
                      description
                  }
              }
          }
      }
  }
`

export default PostPage
