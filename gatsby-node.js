/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createResolvers= ({createResolvers}) => {
    const resolvers = {
        GCMS_TeamIdentity: {
            mo_products: {
                type: ['MoltinProduct'],
                resolve: (source, args, context, info) => {
                    return context.nodeModel.runQuery({
                      query: {
                          filter: {
                              sku: {
                                  eq: source.bike,
                              },
                          },
                      },
                        type: "MoltinProduct",
                        firstOnly: false
                    })
                }
            }
        }
    }

    createResolvers(resolvers)
}
