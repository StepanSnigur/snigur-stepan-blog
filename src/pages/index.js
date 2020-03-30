import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import BlogCards from '../components/BlogCards/BlogCards'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogCards />
  </Layout>
)

export default IndexPage
