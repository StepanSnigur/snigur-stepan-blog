const path = require(`path`);

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
    result.data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.id}`,
        component: path.resolve(`src/pages/post.js`),
        context: {
          id: node.id
        }
      })
    })
  })
};
