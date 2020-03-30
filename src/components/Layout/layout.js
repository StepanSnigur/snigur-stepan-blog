import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from '../header'
import './layout.css'

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{background: `#131217`, minHeight: `100vh`}}>
        <main className="main-style">{children}</main>
        <footer className="main-footer">
          <div className="main-footer__links">
            <Link to="/">Main page</Link>
            <Link to="/">Main page</Link>
            <Link to="/">Main page</Link>
            <Link to="/">Main page</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
