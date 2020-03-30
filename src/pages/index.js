import React, { useState } from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import BlogCards from '../components/BlogCards/BlogCards'
import PostsSearch from '../components/PostsSearch/PostsSearch'

const IndexPage = () => {
  const [postSearchTerm, changePostSearchTerm] = useState('')

  const handlePostSearchTerm = term => changePostSearchTerm(term.target.value)

  return (
    <Layout>
      <SEO title="Home"/>
      <PostsSearch onChangePostSearchTerm={handlePostSearchTerm} />
      <BlogCards postSearchTerm={postSearchTerm} />
    </Layout>
  )
}

export default IndexPage
