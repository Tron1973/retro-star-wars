import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/vehicles.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion"
import styled from "styled-components"

export default function Vehicles({data}) {
  const vehicles = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      >
      <div className={styles.vehicles}>
          <h2>Vehicles</h2>
          <h3>Original Star Wars vehicles by Kenner</h3>
          <div className={styles.vehiclesDisplay}>
            {vehicles.map(vehicle => (
              <Link to={"/vehicles/" + vehicle.frontmatter.slug} key={vehicle.id}>
                <div className={styles.card}>
                <GatsbyImage image={getImage(vehicle.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="vehicle" />
                  <h3>{vehicle.frontmatter.title}</h3>
                </div>
              </Link>
            ))}
          </div>
      </div>
      </Container>
    </Layout>
  )
}

const Container = styled(motion.div)`
  margin-top: 2rem;
`;

export const VehiclesQuery = graphql`
  query VehiclesPage {
    allMarkdownRemark(filter: {children: {}, frontmatter: {type: {eq: "Vehicle"}}}) {
      nodes {
        frontmatter {
          title
          type
          slug
          thumb {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
            }
        }
        id
      }
    }
  }
`