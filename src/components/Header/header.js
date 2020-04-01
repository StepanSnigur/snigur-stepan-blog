import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <header style={{background: `rebeccapurple`}}>
    <div className="header-container">
      <h1>
        <Link to="/" className="header-container__siteTitle">
          {siteTitle}
        </Link>
      </h1>
      <Link to="/about" className="header-container__link">Обо мне</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
