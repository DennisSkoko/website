import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Jumbotron from '../components/Jumbotron'
import Text from '../components/Text'

function Index () {
  return (
    <Container>
      <main>
        <Jumbotron>
          <Heading as='h2'>Welcome</Heading>
          <Text type='lead'>
            My name is Dennis Skoko and I'm a full stack developer currently
            focusing on JavaScript. If you want to know what kind of projects
            I've been working on at my job then visit my LinkedIn page, if you
            are interested on what I do during my free time then check my Github
            page or my portfolio.
          </Text>
        </Jumbotron>
      </main>
    </Container>
  )
}

export default Index
