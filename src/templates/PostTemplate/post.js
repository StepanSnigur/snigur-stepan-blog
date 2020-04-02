import React from 'react'
import { graphql, navigate } from 'gatsby'
import { DiscussionEmbed } from "disqus-react"

import SEO from '../../components/seo'
import Layout from '../../components/Layout/layout'
import './post.css'

const PostPage = ({ data, location }) => {
  const currentPost = data.allContentfulPost.edges[0].node

  const goBack = (e) => {
    e.preventDefault()

    if (location.state && location.state.isRedirectFromBlog) window.history.back()
    else navigate(`/`)
  }

  return (
    <Layout>
      <SEO title={currentPost.title} />
      <h1 className="post-title">{currentPost.title}</h1>
      <span className="post-release-date">Выпущено: {currentPost.createdAt}</span>
      <div className="post-description" dangerouslySetInnerHTML={{__html: currentPost.description.description}} />

      <a className="post-link" href="/" onClick={goBack}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
             className="post-link__arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
             style={{verticalAlign: 'middle'}}
        >
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </svg>
        Назад
      </a>
      <DiscussionEmbed
        shortname={process.env.GATSBY_DISQUS_NAME}
        config={{
          identifier: currentPost.id,
          title: currentPost.title,
          url: window && window.location.href
        }}
      />
    </Layout>
  )
}

export const query = graphql`
    query GetPostById($id: String) {
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
