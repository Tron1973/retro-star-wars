const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const figures = await graphql(`
        query Figures {
          allMarkdownRemark {
            nodes {
              frontmatter {
                slug
                }
              }
            }
        }
    `)

    figures.data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/figures/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/figures-details.js'),
            context: { slug: node.frontmatter.slug },
        })
    })

    const playsets = await graphql(`
        query Playsets {
          allMarkdownRemark {
            nodes {
              frontmatter {
                slug
                }
              }
            }
        }
    `)

    playsets.data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/playsets/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/playsets-details.js'),
            context: { slug: node.frontmatter.slug },
        })
    })

    const vehicles = await graphql(`
        query Vehicles {
          allMarkdownRemark {
            nodes {
              frontmatter {
                slug
                }
              }
            }
        }
    `)

    vehicles.data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/vehicles/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/vehicles-details.js'),
            context: { slug: node.frontmatter.slug },
        })
    })

}
