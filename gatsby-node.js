const path = require('path')

// Create slug for each post

// **onCreateNode was deleted because Contentful already provides the slug

// Create page for blog posts
module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    // 1. get path to template
    // 2. get markdown data
    // 3. create new pages
}
