import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogCard from '../components/BlogCard/BlogCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogCard title={"asdf"} content={"aksjdghkjfdncnmvjdsf"} postId={123874} />
  </Layout>
)

export default IndexPage
