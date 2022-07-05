import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/figures.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion"
import styled from "styled-components"

export default function Figures({data}) {
  const figures = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      >
      <div className={styles.figures}>
          <h2>Action Figures</h2>
          <h3>Original Star Wars action figures by Kenner</h3>
          <div className={styles.figuresDisplay}>
            {figures.map(figure => (
              <Link to={"/figures/" + figure.frontmatter.slug} key={figure.id}>
                <div className={styles.card}>
                <GatsbyImage image={getImage(figure.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="action figure" />
                  <h3>{figure.frontmatter.title}</h3>
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

export const FiguresQuery = graphql`
  query FiguresPage {
    allMarkdownRemark(filter: {children: {}, frontmatter: {type: {eq: "Action Figure"}}}) {
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