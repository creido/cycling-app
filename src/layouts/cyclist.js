import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

// import '../css/blog-post.css';

export default function Template({ data }) {
    const {gcms} = data

    return (
        <div className="blog-post-container">
            <Helmet title={`Your Blog Name - ${gcms.cyclist.firstName} ${gcms.cyclist.lastName}`} />
            <div className="blog-post">
                <h1>{gcms.cyclist.firstName} {gcms.cyclist.lastName}</h1>
                <h2>{gcms.cyclist.cyclistTeamStints[0].team.teamIdentities[0].mo_products[0].name}</h2>
            </div>
        </div>
    )
}

// export const pageQuery = graphql`
// query WalkQuery($slug: String!) {
//     gcms {
//       walk(where: {
//         slug: $slug
//       }) {
//         name
//         products
//         mo_products {
//             name
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
    query cyclistQuery($slug: String!) {
      gcms {
        cyclist(where: {slug: $slug}) {
          firstName
          lastName
          cyclistTeamStints(first: 1){
            team {
              teamIdentities(first: 1) {
                name
                bike
                mo_products {
                  name
                }
                
              }
            }
            
          }
        }
      }
    }
`


