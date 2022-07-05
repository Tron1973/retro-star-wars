import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import { motion } from "framer-motion"
import styled from "styled-components"

export default function About() {
  return (
    <Layout>
      <Container
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.3}}
      >
    <div className={styles.title}>
      <h2>About This Site</h2>
      <div className={styles.content}>
      <p>
      This website is an online gallery of the retro Star Wars toys collected by my brother and I from the years of our childhood 1978 - 1986. These toys are all original items made by Kenner from those years, not the later re-issues and remakes produced in the 1990s.  I have endeavored to include photos of the boxes these toys came in, as they are sometimes even more rare & collectible than the loose toys themselves.  However, none of the action figures have the cardboard packaging…that is because these toys were purchased to be played with as children!
      </p>
      <p>
      This collection represents a lengthy and significant part of our childhood, as so many countless hours were spent playing with these toys. In our teenage years, we packed up everything and have held it safely in storage for more than 30 years.  Again, these toys are in used condition, with the quality varying from poor to excellent.
      </p>
      <p>
      We were able to collect a large percentage of the original Star Wars toys during these years, although not everything (of course!). Some notable absences in our collection are the remote control Sandcrawler, AT-AT, and several variant figures for main characters such as Luke Skywalker, Princess Leia, and Han Solo.  That being said…this is a pretty big collection! 
      </p>
      <p>
      All photos on this site are of the actual toys in our possession, including the packaging and boxes, when applicable. I decided not to pose the action figures with their accessories, weapons, etc, but we do still have them, too.  Any special notes about the individual items are listed on their individual pages.
      There is some yellowing of the plastic on some of the white ships and figures, even though they were in a non-smoking household.
      </p>
      <p>This is a fan website, and we make no claims to the trademarks and copyrights owned by any of the companies involved with Star Wars or the toys themselves.</p>
      </div>
    </div>
    </Container>
   </Layout>
  )
}

const Container = styled(motion.div)`
  margin-top: 2rem;
`;
