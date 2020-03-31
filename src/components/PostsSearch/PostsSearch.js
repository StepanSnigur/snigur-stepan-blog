import React from 'react'

import './PostSearch.css'

const PostsSearch = ({ onChangePostSearchTerm }) => {
  return (
    <div className="posts-search">
      <input className="posts-search__input" placeholder="Введите название поста" onChange={onChangePostSearchTerm} type="text"/>
      <button className="posts-search__button">Search by tags</button>
    </div>
  )
}

export default PostsSearch
