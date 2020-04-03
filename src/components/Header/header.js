import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle, isRedirectToMainPage = false }) => (
  <header style={{background: `rebeccapurple`}}>
    <div className="header-container">
      <h1>
        <Link to="/" className="header-container__siteTitle">
          {siteTitle}
        </Link>
      </h1>
      {
        isRedirectToMainPage ?
          <Link to="/" className="header-container__link">На главную</Link> :
          <Link to="/about" className="header-container__link">Обо мне</Link>
      }
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  isRedirectToMainPage: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
