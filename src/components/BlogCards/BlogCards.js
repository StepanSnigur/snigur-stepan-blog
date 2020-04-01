import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './BlogCards.css'

const BlogCards = ({ postSearchTerm, posts }) => {
  const { edges } = posts.allContentfulPost

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

BlogCards.propTypes = {
  postSearchTerm: PropTypes.string,
  posts: PropTypes.object.isRequired
}

export default BlogCards
