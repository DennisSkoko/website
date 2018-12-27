import React from 'react'
import Head from 'next/head'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Jumbotron from '../ui/Jumbotron'
import Link from '../ui/Link'
import Text from '../ui/Text'

function Index () {
  return (
    <>
      <Head>
        <title>Dennis Skoko - About</title>
      </Head>

      <Container>
        <main>
          <Jumbotron>
            <Heading as='h2'>Welcome</Heading>
            <Text type='lead'>
              My name is Dennis Skoko and I'm a full stack developer currently
              focusing on JavaScript. If you want to know what kind of projects
              I've been working on at my job then visit my
              {' '}<Link href='/portfolio'>LinkedIn page</Link>,
              if you are interested on what I do during my free time then check my
              {' '}<Link href='/portfolio'>Github page</Link>
              {' '}or my <Link href='/portfolio'>portfolio</Link>.
            </Text>
          </Jumbotron>
        </main>
      </Container>
    </>
  )
}

export default Index
