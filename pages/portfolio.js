import React from 'react'
import Head from 'next/head'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Text from '../ui/Text'

function Portfolio () {
  return (
    <>
      <Head>
        <title>Dennis Skoko - Portfolio</title>
      </Head>

      <Container>
        <main>
          <Heading marginTop centered>Portfolio</Heading>
          <Text centered>Under development...</Text>
        </main>
      </Container>
    </>
  )
}

export default Portfolio
