import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import styled from "styled-components"

export default function Home({ data }) {
  return (
    <Layout>
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      >
    <section className={styles.header}>
      <div>
        <h1>Retro<br></br> Star Wars</h1>
        <h2>A collection of vintage Star Wars toys 1978 - 1986</h2>
        <Link className={styles.btn} to="/about">MORE INFO</Link>
      </div>
      <GatsbyImage image={getImage(data.file)} 
                   alt="Darth Vader"
                   className={styles.image} />
    </section>
    </Container>
    </Layout>
  )
}

const Container = styled(motion.div)`
  margin-top: 2rem;
`;

export const query = graphql`
query Banner {
  file(relativePath: {eq: "vader1.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}
`