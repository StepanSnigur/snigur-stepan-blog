import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from '../Header/header'
import './layout.css'

const Layout = ({ children, isRedirectToMainPage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} isRedirectToMainPage={isRedirectToMainPage} />
      <div style={{background: `#131217`, minHeight: `100vh`}}>
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
