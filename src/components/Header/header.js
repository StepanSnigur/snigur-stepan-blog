import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './header.css'

import SunImg from '../../images/sun.png'
import MoonImg from '../../images/moon.png'

const Header = ({ siteTitle, isRedirectToMainPage = false, darkTheme, changeColorTheme }) => {
  return (
    <header style={{ background: `rebeccapurple` }}>
      <div className="header-container">
        <h1>
          <Link to="/" className="header-container__siteTitle">
            {siteTitle}
          </Link>
        </h1>
        <div className="header-container__links">
          <button className="change-colorTheme-btn" onClick={changeColorTheme}>
            {
              darkTheme ?
              <img src={MoonImg} alt="темная тема"/> :
              <img src={SunImg} alt="светлая тема"/>
            }
          </button>
          {
            isRedirectToMainPage ?
              <Link to="/" className="header-container__link">На главную</Link> :
              <Link to="/about" className="header-container__link">Обо мне</Link>
          }
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isRedirectToMainPage: PropTypes.bool,
  darkTheme: PropTypes.bool.isRequired,
  changeColorTheme: PropTypes.func.isRequired
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
