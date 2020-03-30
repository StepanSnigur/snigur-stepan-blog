import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import '../pages-styles/post-page.css'

const PostPage = ({ data }) => {
  const currentPost = data.allContentfulPost.edges[0].node

  return (
    <Layout>
      <h1 className="post-title">{currentPost.title}</h1>
      <p className="post-description" dangerouslySetInnerHTML={{__html: currentPost.description.description}} />

      <Link className="post-link" to="/">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
             className="post-link__arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
             style={{verticalAlign: 'middle'}}
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
        Go to main page
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query GetPostById($id: String!) {
    allContentfulPost(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          createdAt(formatString: "MMMM Do, YYYY", locale: "ru-RU")
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
