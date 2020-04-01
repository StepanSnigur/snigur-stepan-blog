import React from 'react'
import PropTypes from 'prop-types'

import './PostSearch.css'

const PostsSearch = ({ onChangePostSearchTerm }) => {
  return (
    <div className="posts-search">
      <input className="posts-search__input" placeholder="Введите название поста" onChange={onChangePostSearchTerm} type="text"/>
      <button className="posts-search__button">Search by tags</button>
    </div>
  )
}

PostsSearch.propTypes = {
  onChangePostSearchTerm: PropTypes.func
}

export default PostsSearch
