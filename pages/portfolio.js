import React from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import Heading from '../components/Heading'

function Portfolio () {
  return (
    <>
      <Head>
        <title>Dennis Skoko - Portfolio</title>
      </Head>

      <Container>
        <main>
          <Heading marginTop centered>Portfolio</Heading>
        </main>
      </Container>
    </>
  )
}

export default Portfolio
