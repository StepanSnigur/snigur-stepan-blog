import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import './PaginationBar.css'

const PaginationBar = ({ pagesCount }) => {
  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const goToPage = page => {
    page === 0 ? navigate('/') : navigate(`/blog/${page}`)
  }

  let currentPage
  if (global.window) {
    currentPage = window.location.href.match(/\d+$/g) ?
      window.location.href.match(/\d+$/g)[0] :
      0
  }

  return (
    <div className="pagination-bar">
      <span>Страница</span>
      <select onChange={(e) => goToPage(e.target.value - 1)}>
        {pages.map(pageId => <option value={pageId} selected={+currentPage === (pageId - 1)} key={pageId}>{pageId}</option>)}
      </select>
      <span>из {pagesCount}</span>
    </div>
  )
}

PaginationBar.propTypes = {
  pagesCount: PropTypes.number.isRequired
}

export default PaginationBar
