import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../styles/vehicles-details.module.css'
import { graphql } from 'gatsby'
import { motion } from "framer-motion"
import styled from "styled-components"

export default function VehiclesDetails({data}) {
  const {html} = data.markdownRemark
  const {title, featuredImg,featuredImgTwo} = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      >
        <div className={styles.details}>
            <h2>{title}</h2>
            <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
            <div className={styles.card}>
            <GatsbyImage image={getImage(featuredImg)}  alt="vehicle" />
            </div>
            <div className={styles.card}>
            <GatsbyImage image={getImage(featuredImgTwo)}  alt="playset" />
            </div>
        </div>
        </Container>
    </Layout>
  )
}

const Container = styled(motion.div)`
  margin-top: 2rem;
`;

export const query = graphql`
query VehiclesDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      type
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      featuredImgTwo {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
}
`