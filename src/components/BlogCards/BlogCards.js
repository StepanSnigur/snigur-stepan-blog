import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './BlogCards.css'

const BlogCards = ({ postSearchTerm }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPost(sort: {fields: createdAt, order: DESC}) {
        edges {
          node {
            id
            createdAt(formatString: "MMMM Do, YYYY", , locale: "ru-RU")
            title
            shortDescription
          }
        }
      }
    }
  `)
  const { edges } = data.allContentfulPost

  const filteredPosts = edges.filter(({ node: post }) => post.title.toLowerCase().includes(postSearchTerm.toLowerCase()))
  return filteredPosts.map(({ node: post }) => (
    <article className="blog-card" key={post.id}>
      <h3 className="blog-card__headline">{post.title}</h3>
      <p className="blog-card__description">{post.shortDescription}</p>
      <div className="blog-card__date">
        <h5>{post.createdAt}</h5>
      </div>
      <Link className="blog-card__link" to={`/post/${post.id}`} />
    </article>
  ))
}

export default BlogCards
