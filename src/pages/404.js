import React from 'react'
import Layout from '../components/Layout'
import { motion } from "framer-motion"
import styled from "styled-components"

export default function NotFound() {
  return (
    <Layout>
      <Container>
      <div>
          <h2>404</h2>
          <p>Sorry, that page does not exist</p>
      </div>
      </Container>
    </Layout>
  )
}

const Container = styled(motion.div)`
  font-size: 2rem;
  text-align: center;
  margin: 4rem auto 30rem auto;
    
`;
