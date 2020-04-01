const path = require(`path`);
const postsPerPage = 30

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return makeRequest(graphql, `
      {
          allContentfulPost {
              edges {
                  node {
                      id
                  }
              }
          }
      }
  `)
  .then(result => {
    const posts = result.data.allContentfulPost.edges

    posts.forEach(({ node }) => {
      createPage({
        path: `/post/${node.id}`,
        component: path.resolve(`src/templates/PostTemplate/post.js`),
        context: {
          id: node.id
        }
      })
    })

    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((post, i) => {
      i !== 0 && createPage({
        path: `/blog/${i}`,
        component: path.resolve("./src/pages/index.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage
        }
      })
    })
  })
}
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path === '/') {
    deletePage(page)
    createPage({
      ...page,
      context: {
        limit: postsPerPage,
        skip: 0
      }
    })
  }
}
