import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/playsets.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion"
import styled from "styled-components"

export default function Playsets({data}) {
  const playsets = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      >
      <div className={styles.playsets}>
          <h2>Playsets</h2>
          <h3>Original Star Wars playsets by Kenner</h3>
          <div className={styles.playsetsDisplay}>
            {playsets.map(playset => (
              <Link to={"/playsets/" + playset.frontmatter.slug} key={playset.id}>
                <div className={styles.card}>
                <GatsbyImage image={getImage(playset.frontmatter.thumb.childImageSharp.gatsbyImageData)}  />
                  <h3>{playset.frontmatter.title}</h3>
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

export const PlaysetsQuery = graphql`
  query PlaysetsPage {
    allMarkdownRemark(filter: {children: {}, frontmatter: {type: {eq: "Playset"}}}) {
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