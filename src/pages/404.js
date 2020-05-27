import React from 'react'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'
import '../page-styles/404-page.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="not-found-page-title">Страница не найдена</h1>
    <p className="not-found-page-text">Такой страницы не существует, или она была удалена. <Link to="/" className="not-found-page-link">Вернуться на главную</Link></p>
  </Layout>
)

export default NotFoundPage
