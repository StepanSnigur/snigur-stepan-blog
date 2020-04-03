import React, { useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from '../Header/header'
import './layout.css'

const Layout = ({ children, isRedirectToMainPage }) => {
  const [colorTheme, changeColorTheme] = useState('dark')
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    changeColorTheme(localStorage.getItem('colorTheme'))
  }, [])
  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme)
  }, [colorTheme])
  const handleChangeColorTheme = () => {
    changeColorTheme(colorTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        isRedirectToMainPage={isRedirectToMainPage}
        colorTheme={colorTheme}
        changeColorTheme={handleChangeColorTheme}
      />
      <div className={`main-page-style ${colorTheme}-mode`}>
        <main className="main-style">{children}</main>
        <footer className="main-footer">
          <div className="main-footer__links">
            <Link to="/">Главная</Link>
            <Link to="/about">Обо мне</Link>
            <a href="https://snigur-stepan.site" target="_blank">Мой сайт</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isRedirectToMainPage: PropTypes.bool
}

export default Layout
