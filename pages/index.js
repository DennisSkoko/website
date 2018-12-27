import React from 'react'
import Head from 'next/head'
import MyWork from '../components/MyWork'
import Welcome from '../components/Welcome'
import Container from '../ui/Container'

function Index () {
  return (
    <>
      <Head>
        <title>Dennis Skoko - About</title>
      </Head>

      <Container>
        <main>
          <Welcome />
          <MyWork />
        </main>
      </Container>
    </>
  )
}

export default Index
