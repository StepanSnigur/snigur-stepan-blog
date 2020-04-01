import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/seo'

import BlogCards from '../components/BlogCards/BlogCards'
import PostsSearch from '../components/PostsSearch/PostsSearch'
import PaginationBar from '../components/PaginationBar/PaginationBar'

const IndexPage = ({ data }) => {
  const [postSearchTerm, changePostSearchTerm] = useState('')

  const handlePostSearchTerm = term => changePostSearchTerm(term.target.value)

  return (
    <Layout>
      <SEO title="Главная"/>
      <PostsSearch onChangePostSearchTerm={handlePostSearchTerm} />
      <BlogCards postSearchTerm={postSearchTerm} posts={data} />
      <PaginationBar pagesCount={Math.ceil(data.pages.edges.length / 30)} />
    </Layout>
  )
}

export const query = graphql`
  query GetPosts1($limit: Int!, $skip: Int!) {
    allContentfulPost(sort: {fields: createdAt, order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          createdAt(formatString: "MMMM Do, YYYY", locale: "ru-RU")
          title
          shortDescription
        }
      }
    }
    pages: allContentfulPost {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default IndexPage
